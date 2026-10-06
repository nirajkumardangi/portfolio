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
            <p>Academic background</p>
          </div>
        </div>
        <span className="mini-cap" aria-hidden="true">
          <svg className="icon"><use href="#i-award"></use></svg>
        </span>
      </div>

      <div className="education-item">
        <span className="education-bullet"></span>
        <div>
          <h3>Master of Computer Applications (MCA)</h3>
          <p>Doranda College, Ranchi University</p>
          <small>Sep 2024–Expected Nov 2026</small>
        </div>
      </div>

      <div className="education-item education-secondary">
        <span className="education-bullet bullet-soft"></span>
        <div>
          <h3>Bachelor of Science, Computer Science</h3>
          <p>Ranchi University, Ranchi</p>
          <small>Aug 2021–Oct 2024 <span>·</span> CGPA 8.12</small>
        </div>
      </div>

      <div className="education-focus">
        <svg className="icon"><use href="#i-book"></use></svg>
        Computer Science · MERN · Applied AI
      </div>

      <div className="education-details">
        <p>
          <strong>Academic focus:</strong> computer-science fundamentals; self-directed learning in JavaScript and modern web technologies; MERN/full-stack applications and REST APIs; and beginning AI integration with OpenAI. Activities included personal projects, GitHub collaboration, and problem-solving.
        </p>
        <p>
          <strong>Final-year project:</strong>{' '}
          <a
            href="https://github.com/nirajkumardangi/food-donation"
            target="_blank"
            rel="noopener noreferrer"
          >
            FeedAid — Food Donation &amp; Distribution Platform <svg className="icon"><use href="#i-external"></use></svg>
          </a>
          , addressing food waste and hunger.
        </p>
      </div>
    </section>
  );
}
