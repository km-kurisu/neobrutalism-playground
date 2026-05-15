'use client'

import { useState } from 'react'

export default function AccordionPreview() {
  const [open, setOpen] = useState<number | null>(0)

  const items = [
    { title: 'What is Neo-Brutalism?', content: 'A design style characterized by bold colors, thick borders, and high contrast.' },
    { title: 'Is it accessible?', content: 'Yes, if you use high contrast colors and maintain clear typography.' },
    { title: 'Why use this playground?', content: 'To experiment with tokens and export production-ready CSS.' },
  ]

  return (
    <div className="accordion-nb max-w-sm">
      {items.map((item, i) => (
        <div key={i} className="border-b-nb last:border-b-0 border-nb-border">
          <div
            className="p-4 cursor-pointer flex justify-between items-center hover:bg-nb-primary transition-colors font-heading"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span style={{ fontWeight: 'var(--nb-heading-weight)' }}>{item.title}</span>
            <span>{open === i ? '−' : '+'}</span>
          </div>
          {open === i && (
            <div className="p-4 bg-nb-surface border-t-nb border-nb-border font-body text-sm">
              {item.content}
            </div>
          )}
        </div>
      ))}
      <style>{`
        .accordion-nb {
          border: var(--nb-border);
          border-radius: var(--nb-radius);
          box-shadow: var(--nb-shadow);
          overflow: hidden;
        }
        .border-b-nb { border-bottom: var(--nb-border-width) solid var(--nb-border-color); }
        .border-t-nb { border-top: var(--nb-border-width) solid var(--nb-border-color); }
      `}</style>
    </div>
  )
}
