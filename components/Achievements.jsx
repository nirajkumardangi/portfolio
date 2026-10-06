export default function Achievements() {
  return (
    <section className="panel achievements-panel" id="achievements" aria-labelledby="achievements-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-sparkles"></use></svg>
          </span>
          <div>
            <h2 id="achievements-title">GitHub Highlights</h2>
            <p>Public activity snapshot · 1 Oct 2026</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://github.com/nirajkumardangi?tab=achievements"
          target="_blank"
          rel="noopener noreferrer"
        >
          View profile <svg className="icon"><use href="#i-arrow"></use></svg>
        </a>
      </div>

      <div className="achievement-row">
        <div className="achievement-badge">
          <span className="achievement-medal">
            <svg className="icon"><use href="#i-award"></use></svg>
            <b>×2</b>
          </span>
          <div>
            <strong>Pull Shark · Bronze</strong>
            <small>GitHub profile achievement</small>
          </div>
        </div>

        <div className="achievement-badge">
          <span className="achievement-medal medal-activity">
            <svg className="icon"><use href="#i-activity"></use></svg>
          </span>
          <div>
            <strong>803 contributions</strong>
            <small>Last year, as displayed on GitHub</small>
          </div>
        </div>

        <div className="achievement-note">
          <span className="note-icon">
            <svg className="icon"><use href="#i-sparkles"></use></svg>
          </span>
          <p>
            Actively contributing to open-source projects and building AI-powered applications.
          </p>
        </div>
      </div>
    </section>
  );
}
