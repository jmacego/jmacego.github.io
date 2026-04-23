const { useState } = React;

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-logo" href="#">
          <img src="../../assets/logo-jmac-on-light.png" alt="John MacDonald" />
        </a>
      </div>
    </header>
  );
}

function PrimaryNav({ current = 'Home' }) {
  const items = ['Home', 'Posts', 'Projects', 'Resumé', 'About Me'];
  return (
    <nav className="site-nav" aria-label="Primary">
      {items.map((it) => (
        <a key={it} href="#" className={`site-nav-link ${it === current ? 'active' : ''}`}>{it}</a>
      ))}
    </nav>
  );
}

function BlogHero() {
  return (
    <section className="blog-hero">
      <p className="blog-description">Notes on AI strategy, architecture, and technical leadership — with the occasional aviation tangent.</p>
      <h1 className="blog-title">Posts</h1>
    </section>
  );
}

function BlogPost({ title, date, excerpt, tag }) {
  return (
    <article className="blog-post">
      {tag && <div className="blog-post-tag">{tag}</div>}
      <h2 className="blog-post-title"><a href="#">{title}</a></h2>
      <p className="blog-post-meta">{date} · John MacDonald</p>
      <p className="blog-post-excerpt">{excerpt}</p>
      <a className="blog-post-more" href="#">Continue reading →</a>
    </article>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        John MacDonald is a Fractional CTO and advisor focused on AI strategy, architecture, and technical leadership.
        He's also a licensed pilot, recovering entrepreneur, and occasional tinkerer. For the full story, visit the <a href="#">About Me</a> page.
      </p>
    </footer>
  );
}

function CookieNotice({ onAccept, onDeny }) {
  return (
    <div className="cookie-notice">
      <span>We would like to use Google Analytics to monitor website utilization.</span>
      <button className="btn btn-primary btn-sm" onClick={onAccept}>Approve</button>
      <button className="btn btn-ghost btn-sm" onClick={onDeny}>Deny</button>
    </div>
  );
}

Object.assign(window, { Header, PrimaryNav, BlogHero, BlogPost, SiteFooter, CookieNotice });
