export default function Experience() {
  return (
    <section className="panel experience-panel" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-briefcase"></use></svg>
          </span>
          <div>
            <h2 id="experience-title">Experience</h2>
            <p>Professional milestones &amp; technical impact</p>
          </div>
        </div>
        <span className="status-pill">
          <span className="availability-dot"></span>
          <span>Seeking Internships</span>
        </span>
      </div>

      <div className="experience-timeline">
        <div className="timeline-item internship-item">
          <div className="timeline-marker-col">
            <span className="timeline-marker intern-marker">
              <svg className="icon"><use href="#i-briefcase"></use></svg>
            </span>
            <div className="timeline-line"></div>
          </div>

          <div className="timeline-content">
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div className="company-badge-row">
                    <span className="company-name">366Pi Technologies</span>
                    <span className="role-type-tag">Internship</span>
                  </div>
                  <h3 className="role-title">Technology Intern</h3>
                </div>
                <div className="timeline-meta-box">
                  <span className="timeline-date">Jun 2026 – Jul 2026</span>
                  <span className="timeline-duration">2 mos · On-site</span>
                </div>
              </div>

              <p className="timeline-location">
                <svg className="icon"><use href="#i-target"></use></svg>
                <span>Ranchi, Jharkhand, India</span>
              </p>

              <ul className="experience-points">
                <li>
                  <span className="point-bullet"></span>
                  <div>
                    <strong>AI Knowledge Assistant:</strong> Built a production-ready RAG application using ChromaDB, local embeddings, and Ollama-based LLMs; engineered file ingestion pipelines supporting PDF, DOCX, Markdown, CSV, and TXT.
                  </div>
                </li>
                <li>
                  <span className="point-bullet"></span>
                  <div>
                    <strong>Semantic Search &amp; Citations:</strong> Implemented vector similarity retrieval, source-cited conversational responses, and automated exportable report generation.
                  </div>
                </li>
                <li>
                  <span className="point-bullet"></span>
                  <div>
                    <strong>Tree Detection &amp; Localization System:</strong> Contributed to YOLO-based computer vision architecture; engineered strict image-validation pipelines, object localization, instance segmentation, and automated metadata workflows.
                  </div>
                </li>
                <li>
                  <span className="point-bullet"></span>
                  <div>
                    <strong>Core Stack:</strong> Delivered end-to-end features with FastAPI, Next.js, ChromaDB vector stores, and containerized Docker environments.
                  </div>
                </li>
              </ul>

              <div className="experience-tech-row" aria-label="Technologies used">
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">ChromaDB</span>
                <span className="tech-badge">YOLO</span>
                <span className="tech-badge">Ollama</span>
                <span className="tech-badge">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
