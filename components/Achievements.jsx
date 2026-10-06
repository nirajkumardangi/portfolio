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
            <p>Rewarding open-source activity &amp; community milestones</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://github.com/nirajkumardangi?tab=achievements"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub <svg className="icon"><use href="#i-arrow"></use></svg>
        </a>
      </div>

      <div className="achievements-showcase-grid">
        {/* Card 1: Official GitHub Achievement */}
        <article className="achievement-card badge-achievement-shark">
          <div className="achievement-icon-wrap medal-shark">
            <svg className="icon"><use href="#i-award"></use></svg>
            <span className="medal-multiplier">×2</span>
          </div>
          <div className="achievement-meta">
            <span className="achievement-category">GitHub Badge</span>
            <h3 className="achievement-name">Pull Shark · Bronze</h3>
            <p className="achievement-detail">2 merged pull requests in open source repositories</p>
          </div>
        </article>

        {/* Card 2: Contributions Activity */}
        <article className="achievement-card badge-achievement-activity">
          <div className="achievement-icon-wrap medal-activity">
            <svg className="icon"><use href="#i-activity"></use></svg>
          </div>
          <div className="achievement-meta">
            <span className="achievement-category">Yearly Activity</span>
            <h3 className="achievement-name">803 Contributions</h3>
            <p className="achievement-detail">97% commits · Active streak across AI &amp; full-stack repos</p>
          </div>
        </article>

        {/* Card 3: Repositories & Open Source */}
        <article className="achievement-card badge-achievement-repos">
          <div className="achievement-icon-wrap medal-repos">
            <svg className="icon"><use href="#i-folder"></use></svg>
          </div>
          <div className="achievement-meta">
            <span className="achievement-category">Open Source</span>
            <h3 className="achievement-name">36 Public Repos</h3>
            <p className="achievement-detail">Architectural experiments, AI pipelines &amp; web apps</p>
          </div>
        </article>
      </div>

      <div className="achievement-callout">
        <span className="callout-sparkle">
          <svg className="icon"><use href="#i-sparkles"></use></svg>
        </span>
        <p>
          Continuous learning mindset with daily code iterations, transparent Git history, and production-tested open source architectures.
        </p>
      </div>
    </section>
  );
}
