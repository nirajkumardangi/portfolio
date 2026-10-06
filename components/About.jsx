export default function About() {
  return (
    <section className="panel about-panel" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-user"></use></svg>
          </span>
          <div>
            <h2 id="about-title">About Me</h2>
            <p>Building useful things with code</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://github.com/nirajkumardangi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <svg className="icon"><use href="#i-external"></use></svg>
        </a>
      </div>

      <div className="about-copy">
        <p>
          Full-Stack &amp; AI Developer who has built RAG systems and computer-vision applications with Next.js, React, Node.js, PostgreSQL, MongoDB, AWS, and Docker.
        </p>
        <p>
          My work includes a local RAG knowledge assistant and an internship contribution to an AI-powered Tree Detection &amp; Localization System at 366Pi Technologies.
        </p>
        <p className="about-focus">
          Based in Ranchi, Jharkhand · Open to internship opportunities.
        </p>
      </div>

      <div className="about-tags">
        <span><i className="tag-dot dot-teal"></i>Full-stack</span>
        <span><i className="tag-dot dot-violet"></i>Applied AI</span>
        <span><i className="tag-dot dot-orange"></i>RAG systems</span>
        <span><i className="tag-dot dot-green"></i>Internship-ready</span>
      </div>

      <div className="about-portrait" aria-hidden="true">
        <div className="portrait-halo"></div>
        <img
          src="/illustrations/about-developer-v2.webp"
          alt=""
          loading="lazy"
          width="928"
          height="1152"
        />
        <span className="portrait-spark">
          <svg className="icon"><use href="#i-sparkles"></use></svg>
        </span>
      </div>
    </section>
  );
}
