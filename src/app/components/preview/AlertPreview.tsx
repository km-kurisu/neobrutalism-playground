'use client'

export default function AlertPreview() {
  return (
    <div className="flex flex-col gap-2 max-w-sm">
      <div className="alert-nb alert-success">
        <strong>Success!</strong> Your changes have been saved.
      </div>
      <div className="alert-nb alert-error">
        <strong>Error!</strong> Something went wrong.
      </div>
      <div className="alert-nb alert-info">
        <strong>Info:</strong> New update available.
      </div>
      <div className="alert-nb alert-warning">
        <strong>Warning:</strong> Low disk space.
      </div>
      <style>{`
        .alert-nb {
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          box-shadow: var(--nb-shadow);
          padding: 12px 16px;
          font-family: var(--nb-font-body);
          font-size: 0.875rem;
          background: var(--nb-surface);
          color: var(--nb-text);
        }
        .alert-nb strong {
          font-weight: var(--nb-heading-weight);
        }
        .alert-success {
          background: #88D498;
        }
        .alert-error {
          background: var(--nb-danger);
          color: #fff;
          border-color: #000;
        }
        .alert-info {
          background: #74B9FF;
        }
        .alert-warning {
          background: #FFA552;
        }
      `}</style>
    </div>
  )
}
