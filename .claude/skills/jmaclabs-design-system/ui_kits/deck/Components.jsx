function Kicker({ children, tone = 'lime' }) {
  const cls = tone === 'violet' ? 'eyebrow violet' : 'eyebrow';
  return <p className={cls}>{children}</p>;
}

function TokenPill({ children, tone = 'lime' }) {
  return <span className={`token-pill token-pill-${tone}`}>{children}</span>;
}

function DeckButton({ children, variant = 'primary', size = 'md' }) {
  return <button className={`deck-btn deck-btn-${variant} deck-btn-${size}`}>{children}</button>;
}

function DeckCard({ glow = 'violet', children, eyebrow, title, body }) {
  return (
    <article className={`deck-card deck-card-glow-${glow}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h3>{title}</h3>}
      {body && <p className="body">{body}</p>}
      {children}
    </article>
  );
}

function MetricTile({ value, label }) {
  return (
    <article className="metric-tile">
      <span className="metric-value">{value}</span>
      <span className="metric-label">{label}</span>
    </article>
  );
}

function DeckShell({ children }) {
  return <div className="deck-shell">{children}</div>;
}

Object.assign(window, { Kicker, TokenPill, DeckButton, DeckCard, MetricTile, DeckShell });
