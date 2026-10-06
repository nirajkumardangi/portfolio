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
            <p>Engineer, lifelong builder &amp; problem solver</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://github.com/nirajkumardangi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile <svg className="icon"><use href="#i-external"></use></svg>
        </a>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          {/* Personal Statement */}
          <blockquote className="about-statement">
            &ldquo;I believe the most exciting software sits at the intersection of solid full-stack engineering and practical, local applied AI.&rdquo;
          </blockquote>

          <p className="about-lead">
            I&apos;m Niraj Kumar Dangi, an MCA candidate (class of 2026) based in Ranchi, Jharkhand. I build responsive web products and private AI workflows—ranging from local RAG document systems to real-time YOLO object detection.
          </p>

          <p>
            During my internship at <strong>366Pi Technologies</strong>, I contributed to an AI-powered Tree Detection &amp; Localization System, crafting robust image validation and computer vision pipelines. When I&apos;m not coding, I&apos;m exploring new LLM quantization techniques and contributing to open-source developer tooling.
          </p>

          {/* 4 Core Focus Highlights */}
          <div className="about-highlights-grid" aria-label="Key specialties">
            <div className="about-highlight-card highlight-stack">
              <span className="highlight-icon">
                <svg className="icon"><use href="#i-layers"></use></svg>
              </span>
              <div>
                <strong>Full Stack</strong>
                <p>Next.js, Node.js, Postgres &amp; Docker</p>
              </div>
            </div>

            <div className="about-highlight-card highlight-ai">
              <span className="highlight-icon">
                <svg className="icon"><use href="#i-target"></use></svg>
              </span>
              <div>
                <strong>Applied AI</strong>
                <p>Computer Vision, YOLO &amp; Image Validation</p>
              </div>
            </div>

            <div className="about-highlight-card highlight-rag">
              <span className="highlight-icon">
                <svg className="icon"><use href="#i-database"></use></svg>
              </span>
              <div>
                <strong>RAG Systems</strong>
                <p>ChromaDB, Ollama &amp; Local Citations</p>
              </div>
            </div>

            <div className="about-highlight-card highlight-intern">
              <span className="highlight-icon">
                <span className="availability-dot"></span>
              </span>
              <div>
                <strong>Internship Ready</strong>
                <p>Available for 2026 Developer Roles</p>
              </div>
            </div>
          </div>
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
      </div>
    </section>
  );
}
