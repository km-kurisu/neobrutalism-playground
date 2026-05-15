'use client'

export default function TooltipPreview() {
  return (
    <div className="flex gap-8 p-4">
      <div className="relative group inline-block">
        <span className="cursor-help underline decoration-nb-primary decoration-2 underline-offset-4 font-heading">Hover me</span>
        <div className="tooltip-nb">
          This is a neo-brutalist tooltip!
        </div>
      </div>

      <div className="relative group inline-block">
        <span className="cursor-help underline decoration-nb-secondary decoration-2 underline-offset-4 font-heading">Check this</span>
        <div className="tooltip-nb">
          Another one with different context.
        </div>
      </div>

      <style>{`
        .tooltip-nb {
          position: absolute;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%) scale(0.9);
          background: var(--nb-text);
          color: var(--nb-bg);
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          box-shadow: var(--nb-shadow-sm);
          padding: 6px 12px;
          font-size: 0.75rem;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: all 0.1s ease;
          font-family: var(--nb-font-body);
          z-index: 10;
        }
        .group:hover .tooltip-nb {
          opacity: 1;
          transform: translateX(-50%) scale(1);
        }
      `}</style>
    </div>
  )
}
