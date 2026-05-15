'use client'

export default function AvatarPreview() {
  return (
    <div className="flex gap-4 items-center">
      <div className="avatar-nb">
        <span>JD</span>
      </div>
      <div className="avatar-nb bg-nb-primary">
        <span>AK</span>
      </div>
      <div className="avatar-nb bg-nb-secondary">
        <span>NB</span>
      </div>
      <style>{`
        .avatar-nb {
          width: 48px;
          height: 48px;
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          box-shadow: var(--nb-shadow-sm);
          background: var(--nb-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--nb-font-heading);
          font-weight: var(--nb-heading-weight);
          color: var(--nb-text);
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  )
}
