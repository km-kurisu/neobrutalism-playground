'use client'

import { useState } from 'react'
import ButtonPreview from './preview/ButtonPreview'
import CardPreview from './preview/CardPreview'
import InputPreview from './preview/InputPreview'
import BadgePreview from './preview/BadgePreview'
import TogglePreview from './preview/TogglePreview'
import AlertPreview from './preview/AlertPreview'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'button', label: 'Button' },
  { id: 'card', label: 'Card' },
  { id: 'input', label: 'Input' },
  { id: 'badge', label: 'Badge' },
  { id: 'toggle', label: 'Toggle' },
  { id: 'alert', label: 'Alert' },
] as const

type TabId = typeof tabs[number]['id']

export default function ComponentGrid() {
  const [activeTab, setActiveTab] = useState<TabId>('all')

  const tabBtnStyle = (isActive: boolean): React.CSSProperties => ({
    border: 'var(--nb-border)',
    borderRadius: 'var(--nb-radius)',
    background: isActive ? 'var(--nb-primary)' : 'var(--nb-surface)',
    color: 'var(--nb-text)',
    padding: '6px 14px',
    fontFamily: 'var(--nb-font-body)',
    fontSize: '0.8rem',
    fontWeight: isActive ? 'var(--nb-heading-weight)' : 400,
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    whiteSpace: 'nowrap',
  })

  return (
    <div className="flex flex-col flex-1 min-w-0" style={{ height: '100%' }}>
      <div
        style={{
          padding: '0.75rem 1rem',
          borderBottom: 'var(--nb-border)',
          display: 'flex',
          gap: '0.375rem',
          overflowX: 'auto',
          background: 'var(--nb-surface)',
        }}
      >
        {tabs.map((tab) => (
          <button key={tab.id} style={tabBtnStyle(activeTab === tab.id)} onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <PreviewSection label="Button" show={activeTab === 'all' || activeTab === 'button'}>
            <ButtonPreview />
          </PreviewSection>
          <PreviewSection label="Card" show={activeTab === 'all' || activeTab === 'card'}>
            <CardPreview />
          </PreviewSection>
          <PreviewSection label="Input" show={activeTab === 'all' || activeTab === 'input'}>
            <InputPreview />
          </PreviewSection>
          <PreviewSection label="Badge" show={activeTab === 'all' || activeTab === 'badge'}>
            <BadgePreview />
          </PreviewSection>
          <PreviewSection label="Toggle" show={activeTab === 'all' || activeTab === 'toggle'}>
            <TogglePreview />
          </PreviewSection>
          <PreviewSection label="Alert" show={activeTab === 'all' || activeTab === 'alert'}>
            <AlertPreview />
          </PreviewSection>
        </div>
      </div>
    </div>
  )
}

function PreviewSection({ label, show, children }: { label: string; show: boolean; children: React.ReactNode }) {
  if (!show) return null
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3
        style={{
          fontFamily: 'var(--nb-font-display)',
          fontWeight: 'var(--nb-heading-weight)',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: '0 0 0.75rem',
          color: 'var(--nb-text)',
          opacity: 0.6,
        }}
      >
        {label}
      </h3>
      {children}
    </div>
  )
}
