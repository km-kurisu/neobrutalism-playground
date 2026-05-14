'use client'

export default function BadgePreview() {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="badge-nb">Default</span>
      <span className="badge-nb badge-primary">Primary</span>
      <span className="badge-nb badge-success">Success</span>
      <span className="badge-nb badge-error">Error</span>
      <span className="badge-nb badge-warning">Warning</span>
      <style>{`
        .badge-nb {
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          background: var(--nb-surface);
          color: var(--nb-text);
          box-shadow: var(--nb-shadow-sm);
          padding: 4px 12px;
          font-family: var(--nb-font-body);
          font-size: 0.75rem;
          font-weight: var(--nb-heading-weight);
          white-space: nowrap;
        }
        .badge-primary {
          background: var(--nb-primary);
        }
        .badge-success {
          background: #88D498;
          border-color: #000;
        }
        .badge-error {
          background: var(--nb-danger);
        }
        .badge-warning {
          background: #FFA552;
        }
      `}</style>
    </div>
  )
}
