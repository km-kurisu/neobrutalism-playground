'use client'

export default function TogglePreview() {
  return (
    <div className="flex flex-col gap-3">
      <label className="toggle-nb">
        <input type="checkbox" defaultChecked />
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        Thick borders
      </label>
      <label className="toggle-nb">
        <input type="checkbox" />
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        Hard shadows
      </label>
      <label className="toggle-nb">
        <input type="checkbox" defaultChecked />
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        Border radius (no!)
      </label>
      <style>{`
        .toggle-nb {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-family: var(--nb-font-body);
          font-size: 0.875rem;
          cursor: pointer;
          color: var(--nb-text);
        }
        .toggle-nb input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-track {
          display: flex;
          align-items: center;
          width: 44px;
          height: 24px;
          border: var(--nb-border);
          border-radius: 0;
          background: var(--nb-surface);
          box-shadow: var(--nb-shadow-sm);
          padding: 2px;
          transition: background 0.15s;
          flex-shrink: 0;
        }
        .toggle-nb input:checked + .toggle-track {
          background: var(--nb-primary);
        }
        .toggle-thumb {
          width: 16px;
          height: 16px;
          background: var(--nb-text);
          transition: transform 0.15s;
        }
        .toggle-nb input:checked + .toggle-track .toggle-thumb {
          transform: translateX(20px);
        }
        .toggle-nb input:focus-visible + .toggle-track {
          outline: 3px solid var(--nb-primary);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}
