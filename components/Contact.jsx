export default function Contact() {
  return (
    <section className="panel contact-panel" id="contact" aria-labelledby="contact-title">
      <div className="contact-art" aria-hidden="true">
        <svg viewBox="0 0 160 120" role="presentation">
          <path className="plane-shadow" d="m18 72 118-55-39 95-18-31z" />
          <path className="plane" d="m18 72 118-55-39 95-18-31z" />
          <path className="plane-fold" d="m18 72 79 9m39-64L79 81m18 31L84 81" />
          <circle cx="25" cy="28" r="3" />
          <path d="M131 101h4m-2-2v4M51 20h5m-2.5-2.5v5" />
        </svg>
      </div>
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-send"></use></svg>
          </span>
          <div>
            <h2 id="contact-title">Let’s Connect</h2>
            <p>Start a conversation</p>
          </div>
        </div>
      </div>
      <p className="contact-copy">
        Open to internship opportunities and thoughtful project collaborations.
      </p>
      <div className="contact-actions">
        <a className="button button-primary contact-cta" href="mailto:nirajkrdangi@gmail.com">
          Say Hello <svg className="icon"><use href="#i-arrow"></use></svg>
        </a>
        <a
          className="social-button"
          href="https://www.linkedin.com/in/nirajkumardangi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg className="icon"><use href="#i-linkedin"></use></svg>
        </a>
        <a
          className="social-button"
          href="https://github.com/nirajkumardangi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg className="icon"><use href="#i-github"></use></svg>
        </a>
        <a
          className="social-button"
          href="mailto:nirajkrdangi@gmail.com"
          aria-label="Email nirajkrdangi@gmail.com"
        >
          <svg className="icon"><use href="#i-mail"></use></svg>
        </a>
        <a
          className="social-button"
          href="tel:+918825224435"
          aria-label="Call +91-882-522-4435"
        >
          <svg className="icon"><use href="#i-phone"></use></svg>
        </a>
        <a
          className="social-button"
          href="https://nirajkrdangi.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Personal website"
        >
          <svg className="icon"><use href="#i-globe"></use></svg>
        </a>
      </div>
      <p className="email-note">
        <a href="mailto:nirajkrdangi@gmail.com">nirajkrdangi@gmail.com</a> <span>·</span>{' '}
        <a href="tel:+918825224435">+91-882-522-4435</a>
      </p>
    </section>
  );
}
