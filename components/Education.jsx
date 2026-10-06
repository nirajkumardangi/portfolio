export default function Education() {
  return (
    <section className="panel education-panel" id="education" aria-labelledby="education-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-graduation"></use></svg>
          </span>
          <div>
            <h2 id="education-title">Education</h2>
            <p>Academic foundations &amp; honors</p>
          </div>
        </div>
        <span className="mini-cap" aria-hidden="true">
          <svg className="icon"><use href="#i-award"></use></svg>
        </span>
      </div>

      <div className="education-cards-list">
        {/* Postgraduate Degree */}
        <article className="education-card education-primary">
          <div className="edu-card-top">
            <span className="edu-badge badge-current">In Progress</span>
            <span className="edu-date">Sep 2024 – Expected Nov 2026</span>
          </div>
          <div className="edu-body">
            <div className="edu-icon-wrap">
              <svg className="icon"><use href="#i-graduation"></use></svg>
            </div>
            <div className="edu-info">
              <h3>Master of Computer Applications (MCA)</h3>
              <p className="edu-institution">Doranda College, Ranchi University</p>
              <span className="edu-sub">Ranchi, Jharkhand, India</span>
            </div>
          </div>
        </article>

        {/* Undergraduate Degree */}
        <article className="education-card education-secondary">
          <div className="edu-card-top">
            <span className="edu-badge badge-graduated">Graduated · CGPA 8.12</span>
            <span className="edu-date">Aug 2021 – Oct 2024</span>
          </div>
          <div className="edu-body">
            <div className="edu-icon-wrap icon-ug">
              <svg className="icon"><use href="#i-award"></use></svg>
            </div>
            <div className="edu-info">
              <h3>Bachelor of Science, Computer Science</h3>
              <p className="edu-institution">Ranchi University, Ranchi</p>
              <span className="edu-sub">First Class with Distinction</span>
            </div>
          </div>
        </article>
      </div>

      <div className="education-focus-box">
        <div className="edu-focus-header">
          <svg className="icon"><use href="#i-book"></use></svg>
          <strong>Academic Focus &amp; Applied Engineering</strong>
        </div>
        <p>
          Core fundamentals in algorithms, data structures, database design, and computer networks paired with practical full-stack web engineering (MERN, Next.js) and applied AI integration.
        </p>

        <div className="edu-capstone-card">
          <span className="capstone-tag">Final-Year Project</span>
          <a
            href="https://github.com/nirajkumardangi/food-donation"
            target="_blank"
            rel="noopener noreferrer"
            className="capstone-link"
          >
            <span>FeedAid — Food Donation &amp; Distribution Platform</span>
            <svg className="icon"><use href="#i-external"></use></svg>
          </a>
          <p className="capstone-desc">
            Full-stack social distribution platform addressing food waste and hunger in local communities.
          </p>
        </div>
      </div>
    </section>
  );
}
