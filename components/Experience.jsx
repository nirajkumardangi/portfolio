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
            <p>Work and current direction</p>
          </div>
        </div>
        <span className="status-pill">
          <span className="availability-dot"></span>Seeking internships
        </span>
      </div>

      <div className="timeline-item internship-item">
        <span className="timeline-marker intern-marker">
          <svg className="icon"><use href="#i-briefcase"></use></svg>
        </span>
        <div className="timeline-content">
          <div className="timeline-title">
            <div>
              <h3>Technology Intern</h3>
              <p>366Pi Technologies <span>· Internship</span></p>
            </div>
            <span className="timeline-date">Jun 2026–Jul 2026 · 2 mos</span>
          </div>
          <p className="timeline-location">Ranchi, Jharkhand, India · On-site</p>
          <ul className="experience-points">
            <li>
              Built an AI Knowledge Assistant with RAG, ChromaDB, local embeddings, and Ollama-based LLMs; developed ingestion pipelines for PDF, DOCX, Markdown, CSV, and TXT.
            </li>
            <li>
              Implemented semantic search, vector retrieval, citation-based responses, and exportable reports.
            </li>
            <li>
              Contributed to an AI-powered Tree Detection &amp; Localization System using YOLO-based computer vision; built image-validation workflows for quality checks, object detection, localization, segmentation, and metadata generation.
            </li>
            <li>
              Worked with FastAPI, Next.js, vector databases, embeddings, and AI application development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
