'use client'

export default function InputPreview() {
  return (
    <div className="flex flex-col gap-3 max-w-xs">
      <input type="text" className="input-nb" placeholder="Text input" />
      <input type="email" className="input-nb" placeholder="Email input" />
      <select className="input-nb">
        <option>Select option</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <textarea className="input-nb" rows={3} placeholder="Textarea" />
      <style>{`
        .input-nb {
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          background: var(--nb-surface);
          color: var(--nb-text);
          box-shadow: var(--nb-shadow-sm);
          padding: 10px 14px;
          font-family: var(--nb-font-body);
          font-size: 0.875rem;
          width: 100%;
          transition: box-shadow 0.15s, transform 0.15s;
          outline: none;
        }
        .input-nb::placeholder {
          color: var(--nb-text);
          opacity: 0.5;
        }
        .input-nb:focus {
          outline: 3px solid var(--nb-primary);
          outline-offset: 2px;
          box-shadow: var(--nb-shadow);
          transform: translate(-1px, -1px);
        }
        select.input-nb {
          cursor: pointer;
        }
        textarea.input-nb {
          resize: vertical;
        }
      `}</style>
    </div>
  )
}
