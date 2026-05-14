'use client'

export default function CardPreview() {
  return (
    <div className="card-nb max-w-sm">
      <div className="card-header" style={{ borderBottom: 'var(--nb-border)', marginBottom: '0.75rem', paddingBottom: '0.75rem' }}>
        <h3 style={{ fontFamily: 'var(--nb-font-heading)', fontWeight: 'var(--nb-heading-weight)', fontSize: '1.125rem', margin: 0 }}>
          Card Title
        </h3>
      </div>
      <div className="card-body" style={{ marginBottom: '1rem' }}>
        <p style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.875rem', margin: 0, lineHeight: 1.6 }}>
          Neo brutalism components with bold borders, hard shadows, and flat colors.
        </p>
      </div>
      <div className="card-footer" style={{ display: 'flex', gap: '0.5rem' }}>
        <button className="card-btn">Action</button>
        <button className="card-btn card-btn-secondary">Cancel</button>
      </div>
      <style>{`
        .card-nb {
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          background: var(--nb-surface);
          box-shadow: var(--nb-shadow);
          padding: 1.25rem;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .card-nb:hover {
          transform: translate(-2px, -2px);
          box-shadow: var(--nb-shadow-lg);
        }
        .card-btn {
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          background: var(--nb-primary);
          color: var(--nb-text);
          padding: 6px 16px;
          font-family: var(--nb-font-body);
          font-weight: var(--nb-heading-weight);
          cursor: pointer;
          transition: all 0.1s ease;
        }
        .card-btn:hover {
          transform: translate(-1px, -1px);
          box-shadow: var(--nb-shadow-sm);
        }
        .card-btn-secondary {
          background: transparent;
          box-shadow: none;
        }
        .card-btn-secondary:hover {
          box-shadow: var(--nb-shadow-sm);
        }
      `}</style>
    </div>
  )
}
