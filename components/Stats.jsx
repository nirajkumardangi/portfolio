export default function Stats() {
  return (
    <section className="stats-grid" aria-label="Portfolio at a glance">
      <article className="stat-card stat-mint">
        <div className="stat-card-top">
          <span className="stat-icon" aria-hidden="true">
            <svg className="icon"><use href="#i-code"></use></svg>
          </span>
          <span className="stat-badge badge-mint">+36 on GitHub</span>
        </div>
        <div className="stat-text">
          <span className="stat-label">Public repositories</span>
          <strong>36</strong>
          <span className="stat-caption">Public projects &amp; learning repos</span>
        </div>
      </article>

      <article className="stat-card stat-rose">
        <div className="stat-card-top">
          <span className="stat-icon" aria-hidden="true">
            <svg className="icon"><use href="#i-activity"></use></svg>
          </span>
          <span className="stat-badge badge-rose">97% commits</span>
        </div>
        <div className="stat-text">
          <span className="stat-label">Contributions</span>
          <strong>803</strong>
          <span className="stat-caption">Last year · snapshot 01 Oct 2026</span>
        </div>
      </article>

      <article className="stat-card stat-amber">
        <div className="stat-card-top">
          <span className="stat-icon" aria-hidden="true">
            <svg className="icon"><use href="#i-award"></use></svg>
          </span>
          <span className="stat-badge badge-amber">Verified</span>
        </div>
        <div className="stat-text">
          <span className="stat-label">Credentials</span>
          <strong>4 listed</strong>
          <span className="stat-caption">Resume + LinkedIn</span>
        </div>
      </article>

      <article className="stat-card stat-blue">
        <div className="stat-card-top">
          <span className="stat-icon" aria-hidden="true">
            <svg className="icon"><use href="#i-target"></use></svg>
          </span>
          <span className="stat-badge badge-blue">Available now</span>
        </div>
        <div className="stat-text">
          <span className="stat-label">Currently open to</span>
          <strong>Internships</strong>
          <span className="stat-caption">Full-stack &amp; AI opportunities</span>
        </div>
      </article>
    </section>
  );
}
