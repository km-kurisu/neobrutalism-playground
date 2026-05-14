'use client'

import { useState } from 'react'
import { useThemeStore } from '@/lib/store'
import { generateCSS, generateTailwindConfig, generateComponentCSS, contrastRatio, contrastLevel } from '@/lib/utils'

type Tab = 'css' | 'tailwind' | 'components'

export default function CodePanel() {
  const tokens = useThemeStore((s) => s.tokens)
  const [tab, setTab] = useState<Tab>('css')
  const [compTab, setCompTab] = useState<string>('button')
  const [copied, setCopied] = useState(false)

  const cssCode = generateCSS(tokens)
  const twCode = generateTailwindConfig(tokens)
  const compCode = generateComponentCSS(compTab, tokens)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const textContrast = contrastRatio(tokens.textColor, tokens.bgColor)
  const textLevel = contrastLevel(textContrast)
  const surfaceContrast = contrastRatio(tokens.textColor, tokens.surfaceColor)
  const surfaceLevel = contrastLevel(surfaceContrast)
  const primaryContrast = contrastRatio(tokens.textColor, tokens.primaryColor)
  const primaryLevel = contrastLevel(primaryContrast)

  const tabBtn = (id: Tab, label: string) => (
    <button
      onClick={() => setTab(id)}
      style={{
        border: 'var(--nb-border)',
        borderRadius: 'var(--nb-radius)',
        background: tab === id ? 'var(--nb-primary)' : 'var(--nb-surface)',
        color: 'var(--nb-text)',
        padding: '6px 14px',
        fontFamily: 'var(--nb-font-body)',
        fontSize: '0.8rem',
        fontWeight: tab === id ? 'var(--nb-heading-weight)' : 400,
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )

  return (
    <div
      className="w-80 shrink-0 flex flex-col"
      style={{
        borderLeft: 'var(--nb-border)',
        background: 'var(--nb-surface)',
        height: '100%',
      }}
    >
      <div style={{ padding: '0.75rem', borderBottom: 'var(--nb-border)', display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
        {tabBtn('css', 'CSS')}
        {tabBtn('tailwind', 'Tailwind')}
        {tabBtn('components', 'Components')}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0.75rem' }}>
        {tab === 'css' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700 }}>CSS Custom Properties</span>
              <button onClick={() => copy(cssCode)} style={{ border: 'var(--nb-border)', borderRadius: 'var(--nb-radius)', background: 'var(--nb-bg)', color: 'var(--nb-text)', padding: '2px 10px', fontFamily: 'var(--nb-font-mono)', fontSize: '0.7rem', cursor: 'pointer' }}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre
              style={{
                border: 'var(--nb-border)',
                borderRadius: 'var(--nb-radius)',
                background: 'var(--nb-bg)',
                padding: '0.75rem',
                fontFamily: 'var(--nb-font-mono)',
                fontSize: '0.7rem',
                overflowX: 'auto',
                whiteSpace: 'pre',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {cssCode}
            </pre>
          </div>
        )}

        {tab === 'tailwind' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700 }}>Tailwind Config</span>
              <button onClick={() => copy(twCode)} style={{ border: 'var(--nb-border)', borderRadius: 'var(--nb-radius)', background: 'var(--nb-bg)', color: 'var(--nb-text)', padding: '2px 10px', fontFamily: 'var(--nb-font-mono)', fontSize: '0.7rem', cursor: 'pointer' }}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre
              style={{
                border: 'var(--nb-border)',
                borderRadius: 'var(--nb-radius)',
                background: 'var(--nb-bg)',
                padding: '0.75rem',
                fontFamily: 'var(--nb-font-mono)',
                fontSize: '0.7rem',
                overflowX: 'auto',
                whiteSpace: 'pre',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {twCode}
            </pre>
          </div>
        )}

        {tab === 'components' && (
          <div>
            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              {['button', 'card', 'input'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCompTab(c)}
                  style={{
                    border: 'var(--nb-border)',
                    borderRadius: 'var(--nb-radius)',
                    background: compTab === c ? 'var(--nb-primary)' : 'var(--nb-bg)',
                    color: 'var(--nb-text)',
                    padding: '3px 10px',
                    fontFamily: 'var(--nb-font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: compTab === c ? 700 : 400,
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'capitalize' }}>{compTab}</span>
              <button onClick={() => copy(compCode)} style={{ border: 'var(--nb-border)', borderRadius: 'var(--nb-radius)', background: 'var(--nb-bg)', color: 'var(--nb-text)', padding: '2px 10px', fontFamily: 'var(--nb-font-mono)', fontSize: '0.7rem', cursor: 'pointer' }}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre
              style={{
                border: 'var(--nb-border)',
                borderRadius: 'var(--nb-radius)',
                background: 'var(--nb-bg)',
                padding: '0.75rem',
                fontFamily: 'var(--nb-font-mono)',
                fontSize: '0.7rem',
                overflowX: 'auto',
                whiteSpace: 'pre',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {compCode}
            </pre>
          </div>
        )}

        <div style={{ marginTop: '1rem', borderTop: 'var(--nb-border)', paddingTop: '0.75rem' }}>
          <p style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700, margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Contrast Checker
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            <ContrastRow label="Text on BG" ratio={textContrast} level={textLevel} />
            <ContrastRow label="Text on Surface" ratio={surfaceContrast} level={surfaceLevel} />
            <ContrastRow label="Text on Primary" ratio={primaryContrast} level={primaryLevel} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ContrastRow({ label, ratio, level }: { label: string; ratio: number; level: ReturnType<typeof contrastLevel> }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--nb-font-mono)', fontSize: '0.7rem' }}>
      <span>{label}</span>
      <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
        <span>{ratio.toFixed(1)}:1</span>
        <span style={{ color: level.aa ? '#22c55e' : '#ef4444' }}>{level.aa ? 'AA' : '—'}</span>
        <span style={{ color: level.aaa ? '#22c55e' : '#ef4444' }}>{level.aaa ? 'AAA' : '—'}</span>
      </div>
    </div>
  )
}
