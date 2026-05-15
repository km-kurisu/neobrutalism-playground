'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import TokenPanel from './TokenPanel'
import ComponentGrid from './ComponentGrid'
import CodePanel from './CodePanel'

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])
  return matches
}

export default function Playground() {
  const [codeOpen, setCodeOpen] = useState(true)
  const [tokensOpen, setTokensOpen] = useState(true)
  const isMobile = useMediaQuery('(max-width: 900px)')

  const effectiveCodeOpen = isMobile ? false : codeOpen
  const effectiveTokensOpen = isMobile ? false : tokensOpen

  return (
    <div
      className="flex flex-col"
      style={{ height: '100dvh', background: 'var(--nb-bg)', color: 'var(--nb-text)' }}
    >
      <header
        style={{
          borderBottom: 'var(--nb-border)',
          padding: isMobile ? '0.4rem 0.6rem' : '0.6rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--nb-surface)',
          gap: '0.5rem',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--nb-font-display)',
            fontWeight: 'var(--nb-heading-weight)',
            fontSize: isMobile ? '1rem' : '1.25rem',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          NB<span style={{ color: 'var(--nb-primary)' }}>/</span>PLAY
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Link href="/docs">
            <HeaderBtn
              label="Docs"
              active={false}
              onClick={() => {}}
              compact={isMobile}
            />
          </Link>
          <HeaderBtn
            label={isMobile ? '▣' : effectiveTokensOpen ? 'Hide Theme' : 'Theme'}
            active={effectiveTokensOpen}
            onClick={() => setTokensOpen(!tokensOpen)}
            compact={isMobile}
          />
          <HeaderBtn
            label={isMobile ? '</>' : effectiveCodeOpen ? 'Hide Code' : 'Code'}
            active={effectiveCodeOpen}
            onClick={() => setCodeOpen(!codeOpen)}
            compact={isMobile}
          />
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {effectiveTokensOpen && <TokenPanel />}
        <ComponentGrid />
        {effectiveCodeOpen && <CodePanel />}
      </div>
    </div>
  )
}

function HeaderBtn({
  label,
  active,
  onClick,
  compact,
}: {
  label: string
  active: boolean
  onClick: () => void
  compact: boolean
}) {
  return (
    <button
      onClick={onClick}
      style={{
        border: 'var(--nb-border)',
        borderRadius: 'var(--nb-radius)',
        background: active ? 'var(--nb-primary)' : 'var(--nb-surface)',
        color: 'var(--nb-text)',
        padding: compact ? '4px 10px' : '6px 14px',
        fontFamily: 'var(--nb-font-body)',
        fontSize: compact ? '0.7rem' : '0.8rem',
        fontWeight: active ? 'var(--nb-heading-weight)' : 600,
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )
}
