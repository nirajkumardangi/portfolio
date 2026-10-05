(() => {
  const root = document.documentElement;
  const body = document.body;
  const themeButton = document.getElementById('themeToggle');
  const searchInput = document.getElementById('siteSearch');
  const searchForm = document.getElementById('siteSearchForm');
  const projectCards = [...document.querySelectorAll('.filterable-project')];
  const skillChips = [...document.querySelectorAll('.filterable-skill')];
  const projectEmpty = document.getElementById('projectEmpty');
  const skillEmpty = document.getElementById('skillEmpty');
  const skillsMore = document.getElementById('skillsMore');
  const skillsToggle = document.getElementById('toggleSkills');
  const activityToggle = document.getElementById('activityToggle');
  const activityPopover = document.getElementById('activityPopover');
  const sidebar = document.getElementById('sidebar');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const menuToggle = document.getElementById('menuToggle');
  const sidebarClose = document.getElementById('sidebarClose');
  let skillsExpanded = false;

  function setTheme(theme) {
    const nextTheme = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = nextTheme;
    const isDark = nextTheme === 'dark';
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(isDark));
      themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeButton.title = isDark ? 'Switch to the warm light theme' : 'Switch to the dark theme';
    }
    try { localStorage.setItem('niraj-portfolio-theme', nextTheme); } catch (_) { /* Private browsing may block storage. */ }
  }

  try {
    const savedTheme = localStorage.getItem('niraj-portfolio-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme);
  } catch (_) { /* Use the reference light theme. */ }

  themeButton?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  function normalize(value) {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9.+# ]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function updateSearch() {
    const raw = searchInput?.value || '';
    const query = normalize(raw);
    let visibleProjects = 0;
    let visibleSkills = 0;

    projectCards.forEach((card) => {
      const haystack = normalize(`${card.dataset.search || ''} ${card.textContent || ''}`);
      const matches = !query || haystack.includes(query);
      card.hidden = !matches;
      if (matches) visibleProjects += 1;
    });

    skillChips.forEach((chip) => {
      const haystack = normalize(`${chip.dataset.search || ''} ${chip.textContent || ''}`);
      const matches = !query || haystack.includes(query);
      chip.hidden = !matches;
      if (matches) visibleSkills += 1;
    });

    const extraSkillsMatch = query && skillChips.some((chip) => chip.closest('#skillsMore') && !chip.hidden);
    skillsMore.hidden = !skillsExpanded && !extraSkillsMatch;
    projectEmpty.hidden = !query || visibleProjects > 0;
    skillEmpty.hidden = !query || visibleSkills > 0;
  }

  searchInput?.addEventListener('input', updateSearch);
  searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    updateSearch();
  });

  skillsToggle?.addEventListener('click', () => {
    skillsExpanded = !skillsExpanded;
    skillsMore.hidden = !skillsExpanded;
    skillsToggle.setAttribute('aria-expanded', String(skillsExpanded));
    skillsToggle.innerHTML = skillsExpanded
      ? 'Show less <svg class="icon"><use href="#i-arrow"></use></svg>'
      : 'See all <svg class="icon"><use href="#i-arrow"></use></svg>';
    if (searchInput?.value) updateSearch();
  });

  // Quick focus shortcut for the dashboard search.
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      searchInput?.focus();
      searchInput?.select();
    }
    if (event.key === 'Escape') {
      closeDrawer();
      closeActivity();
    }
  });

  function openActivity() {
    if (!activityPopover || !activityToggle) return;
    activityPopover.hidden = false;
    activityToggle.setAttribute('aria-expanded', 'true');
  }
  function closeActivity() {
    if (!activityPopover || !activityToggle) return;
    activityPopover.hidden = true;
    activityToggle.setAttribute('aria-expanded', 'false');
  }
  activityToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    if (activityPopover.hidden) openActivity(); else closeActivity();
  });
  activityPopover?.addEventListener('click', (event) => event.stopPropagation());
  document.addEventListener('click', (event) => {
    if (activityPopover && !activityPopover.hidden && !activityPopover.contains(event.target) && !activityToggle?.contains(event.target)) closeActivity();
  });

  function openDrawer() {
    if (!sidebar || !drawerBackdrop || !menuToggle) return;
    sidebar.classList.add('is-open');
    drawerBackdrop.hidden = false;
    body.classList.add('drawer-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    sidebar.querySelector('.nav-item')?.focus();
  }
  function closeDrawer() {
    if (!sidebar || !drawerBackdrop || !menuToggle) return;
    sidebar.classList.remove('is-open');
    drawerBackdrop.hidden = true;
    body.classList.remove('drawer-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  menuToggle?.addEventListener('click', () => sidebar?.classList.contains('is-open') ? closeDrawer() : openDrawer());
  sidebarClose?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  document.querySelectorAll('.nav-item').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach((item) => {
        item.classList.remove('is-active');
        item.removeAttribute('aria-current');
      });
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
      closeDrawer();
    });
  });

  const navById = new Map(
    [...document.querySelectorAll('.nav-item')].map((link) => [link.getAttribute('href')?.slice(1), link])
  );
  const observedSections = [...navById.keys()]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const link = navById.get(visible.target.id);
      if (!link) return;
      document.querySelectorAll('.nav-item').forEach((item) => {
        item.classList.remove('is-active');
        item.removeAttribute('aria-current');
      });
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .15, .35, .6] });
    observedSections.forEach((section) => observer.observe(section));
  }

  // Lightweight reading progress indicator; no scroll work is done outside rAF.
  const pageProgress = document.getElementById('pageProgress');
  let progressQueued = false;
  function paintProgress() {
    progressQueued = false;
    if (!pageProgress) return;
    const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    pageProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, window.scrollY / range))})`;
  }
  function queueProgress() {
    if (progressQueued) return;
    progressQueued = true;
    window.requestAnimationFrame(paintProgress);
  }
  window.addEventListener('scroll', queueProgress, { passive: true });
  window.addEventListener('resize', queueProgress, { passive: true });
  paintProgress();

  // GSAP is self-hosted for the offline preview. Keep all motion optional.
  const reduceMotion = Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);
  if (window.gsap && !reduceMotion) {
    const titleWords = [...document.querySelectorAll('#hero-title .title-word')];
    if (titleWords.length) {
      window.gsap.fromTo(titleWords,
        { y: 15, autoAlpha: 0, rotateX: -12, filter: 'blur(4px)' },
        { y: 0, autoAlpha: 1, rotateX: 0, filter: 'blur(0px)', duration: .82, ease: 'power3.out', stagger: .095, delay: .12, clearProps: 'transform,filter,opacity,visibility' }
      );
    }

    if ('IntersectionObserver' in window) {
      const revealTargets = [...new Set(document.querySelectorAll(
        '.stats-grid .stat-card, .overview-grid > .panel, .project-grid .project-card, .support-stack > .panel, .detail-grid > .panel, .achievements-panel, .blog-panel'
      ))];
      if (revealTargets.length) {
        window.gsap.set(revealTargets, { autoAlpha: 0, y: 18 });
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            window.gsap.to(entry.target, {
              autoAlpha: 1,
              y: 0,
              duration: .64,
              delay: Math.min(entry.target.dataset.revealOrder ? Number(entry.target.dataset.revealOrder) * .04 : .035, .16),
              ease: 'power2.out',
              clearProps: 'transform,opacity,visibility'
            });
            observer.unobserve(entry.target);
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: .08 });
        revealTargets.forEach((target, index) => {
          target.dataset.revealOrder = String(index % 5);
          revealObserver.observe(target);
        });
      }
    }
  }

})();
