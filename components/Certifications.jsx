export default function Certifications() {
  const CERTIFICATES = [
    {
      id: 'fcc',
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      issuerIcon: 'FCC',
      iconClass: 'cert-freecode',
      date: 'Apr 2026',
      credentialId: 'nirajkumardangi-rwdv9',
      verifyUrl: 'https://www.freecodecamp.org/certification/nirajkumardangi/responsive-web-design-v9',
      badgeColor: 'badge-blue',
    },
    {
      id: 'pw',
      title: 'Full Stack Web Development 1.0',
      issuer: 'PW (PhysicsWallah Skills)',
      issuerIcon: 'PW',
      iconClass: 'cert-pw',
      date: 'Aug 2024',
      credentialId: 'd8b000fd-f7b0-473b-b194-c2c43003502c',
      verifyUrl: 'https://cdn.pwskills.com/learn/certificates/d8b000fd-f7b0-473b-b194-c2c43003502c.pdf',
      badgeColor: 'badge-amber',
    },
    {
      id: 'jhu',
      title: 'HTML, CSS & JavaScript for Web Developers',
      issuer: 'Johns Hopkins University · Coursera',
      issuerIcon: 'JHU',
      iconClass: 'cert-jhu',
      date: 'Jun 2022',
      credentialId: '6SW2QSXKVKNC',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/6SW2QSXKVKNC',
      badgeColor: 'badge-navy',
    },
  ];

  return (
    <section className="panel certifications-panel" id="certifications" aria-labelledby="certifications-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-award"></use></svg>
          </span>
          <div>
            <h2 id="certifications-title">Certifications</h2>
            <p>Verified industry credentials &amp; technical certificates</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://www.linkedin.com/in/nirajkumardangi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <svg className="icon"><use href="#i-external"></use></svg>
        </a>
      </div>

      <div className="credential-list">
        {CERTIFICATES.map((cert) => (
          <article key={cert.id} className="credential-card">
            <div className="credential-top">
              <span className={`credential-emblem ${cert.iconClass}`}>
                <span>{cert.issuerIcon}</span>
              </span>
              <div className="credential-meta-header">
                <span className="credential-issuer">{cert.issuer}</span>
                <span className="credential-date">{cert.date}</span>
              </div>
            </div>

            <h3 className="credential-title">{cert.title}</h3>

            <div className="credential-footer">
              <div className="credential-id-box">
                <span className="id-label">ID:</span>
                <code className="id-code">{cert.credentialId}</code>
              </div>

              <a
                className="credential-verify-btn"
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${cert.title} certificate`}
              >
                <span className="verified-check">✓</span>
                <span>Verify</span>
                <svg className="icon"><use href="#i-external"></use></svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
