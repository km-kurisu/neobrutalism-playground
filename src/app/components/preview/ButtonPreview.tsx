'use client'

export default function ButtonPreview() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <button className="btn-nb">Default</button>
      <button className="btn-nb btn-nb-primary">Primary</button>
      <button className="btn-nb btn-nb-inverted">Inverted</button>
      <button className="btn-nb btn-nb-ghost">Ghost</button>
      <style>{`
        .btn-nb {
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          background: transparent;
          color: var(--nb-text);
          box-shadow: var(--nb-shadow);
          padding: 10px 20px;
          font-weight: var(--nb-heading-weight);
          font-family: var(--nb-font-body);
          cursor: pointer;
          transition: all 0.1s ease;
        }
        .btn-nb:hover {
          transform: translate(-2px, -2px);
          box-shadow: var(--nb-shadow-lg);
        }
        .btn-nb:active {
          transform: translate(var(--nb-border-width), var(--nb-border-width));
          box-shadow: none;
        }
        .btn-nb-primary {
          background: var(--nb-primary);
          color: var(--nb-text);
        }
        .btn-nb-inverted {
          background: var(--nb-text);
          color: var(--nb-bg);
          border-color: var(--nb-text);
        }
        .btn-nb-ghost {
          border-color: transparent;
          box-shadow: none;
        }
        .btn-nb-ghost:hover {
          background: var(--nb-primary);
          box-shadow: var(--nb-shadow);
        }
      `}</style>
    </div>
  )
}
