export default function Blog() {
  return (
    <section className="panel blog-panel" id="blog" aria-labelledby="blog-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-book"></use></svg>
          </span>
          <div>
            <h2 id="blog-title">Blog &amp; Notes</h2>
            <p>Writing and build notes</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://nirajkrdangi.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal website <svg className="icon"><use href="#i-external"></use></svg>
        </a>
      </div>
      <div className="blog-empty-state">
        <span className="blog-empty-icon">
          <svg className="icon"><use href="#i-file"></use></svg>
        </span>
        <div>
          <h3>Coming Soon</h3>
          <p>Blog posts and build notes are on the way — stay tuned!</p>
        </div>
      </div>
    </section>
  );
}
