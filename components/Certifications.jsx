export default function Certifications() {
  return (
    <section className="panel certifications-panel" id="certifications" aria-labelledby="certifications-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-award"></use></svg>
          </span>
          <div>
            <h2 id="certifications-title">Certifications</h2>
            <p>LinkedIn and supplied resume</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://www.linkedin.com/in/nirajkumardangi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Profile <svg className="icon"><use href="#i-external"></use></svg>
        </a>
      </div>

      <div className="credential-list">
        <article className="credential-item">
          <span className="credential-icon cert-freecode">
            <svg className="icon"><use href="#i-code"></use></svg>
          </span>
          <div>
            <h3>Responsive Web Design</h3>
            <p>freeCodeCamp <span>·</span> Apr 2026</p>
            <small>Credential ID: nirajkumardangi-rwdv9</small>
          </div>
          <a
            className="credential-verify"
            href="https://www.freecodecamp.org/certification/nirajkumardangi/responsive-web-design-v9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify <svg className="icon"><use href="#i-external"></use></svg>
          </a>
        </article>

        <article className="credential-item">
          <span className="credential-icon cert-pw">PW</span>
          <div>
            <h3>Full Stack Web Development 1.0</h3>
            <p>PW (PhysicsWallah) <span>·</span> Aug 2024</p>
            <small>Credential ID: d8b000fd-f7b0-473b-b194-c2c43003502c</small>
          </div>
          <a
            className="credential-verify"
            href="https://cdn.pwskills.com/learn/certificates/d8b000fd-f7b0-473b-b194-c2c43003502c.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify <svg className="icon"><use href="#i-external"></use></svg>
          </a>
        </article>

        <article className="credential-item">
          <span className="credential-icon cert-jhu">
            <svg className="icon"><use href="#i-book"></use></svg>
          </span>
          <div>
            <h3>HTML, CSS &amp; JavaScript for Web Developers</h3>
            <p>Johns Hopkins / Coursera <span>·</span> Jun 2022</p>
            <small>Credential ID: 6SW2QSXKVKNC</small>
          </div>
          <a
            className="credential-verify"
            href="https://www.coursera.org/account/accomplishments/verify/6SW2QSXKVKNC"
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify <svg className="icon"><use href="#i-external"></use></svg>
          </a>
        </article>
      </div>
    </section>
  );
}
