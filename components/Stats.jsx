export default function Stats() {
  return (
    <section className="stats-grid" aria-label="Portfolio at a glance">
      <article className="stat-card stat-mint">
        <span className="stat-icon">
          <svg className="icon"><use href="#i-code"></use></svg>
        </span>
        <span className="stat-text">
          <span className="stat-label">Public repositories</span>
          <strong>36</strong>
          <span className="stat-caption">Public projects &amp; learning repos</span>
        </span>
      </article>

      <article className="stat-card stat-rose">
        <span className="stat-icon">
          <svg className="icon"><use href="#i-activity"></use></svg>
        </span>
        <span className="stat-text">
          <span className="stat-label">Contributions</span>
          <strong>803</strong>
          <span className="stat-caption">Last year · snapshot 01 Oct 2026</span>
        </span>
      </article>

      <article className="stat-card stat-amber">
        <span className="stat-icon">
          <svg className="icon"><use href="#i-award"></use></svg>
        </span>
        <span className="stat-text">
          <span className="stat-label">Credentials</span>
          <strong>4 listed</strong>
          <span className="stat-caption">Resume + LinkedIn</span>
        </span>
      </article>

      <article className="stat-card stat-blue">
        <span className="stat-icon">
          <svg className="icon"><use href="#i-target"></use></svg>
        </span>
        <span className="stat-text">
          <span className="stat-label">Currently open to</span>
          <strong>Internships</strong>
          <span className="stat-caption">Full-stack &amp; AI opportunities</span>
        </span>
      </article>
    </section>
  );
}
