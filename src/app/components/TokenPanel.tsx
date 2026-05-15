'use client'

import { useThemeStore, type ThemeTokens } from '@/lib/store'
import { presets } from '@/lib/presets'
import { generateHarmoniousPalette, type HarmonyType } from '@/lib/utils'

const fontOptions = [
  'Syne', 'Space Grotesk', 'Inter', 'Space Mono',
  'Bebas Neue', 'Archivo Black', 'Plus Jakarta Sans',
  'DM Sans', 'Outfit', 'JetBrains Mono',
]

type SliderDef = {
  key: keyof ThemeTokens
  label: string
  min: number
  max: number
  step?: number
}

const sliderGroups: { title: string; sliders: SliderDef[] }[] = [
  {
    title: 'Border',
    sliders: [
      { key: 'borderWidth', label: 'Width', min: 0, max: 8, step: 1 },
      { key: 'borderRadius', label: 'Radius', min: 0, max: 24, step: 1 },
    ],
  },
  {
    title: 'Shadow',
    sliders: [
      { key: 'shadowOffsetX', label: 'Offset X', min: 0, max: 20, step: 1 },
      { key: 'shadowOffsetY', label: 'Offset Y', min: 0, max: 20, step: 1 },
      { key: 'shadowBlur', label: 'Blur', min: 0, max: 12, step: 1 },
    ],
  },
  {
    title: 'Typography',
    sliders: [
      { key: 'headingWeight', label: 'Heading Weight', min: 400, max: 900, step: 100 },
    ],
  },
  {
    title: 'Animations',
    sliders: [
      { key: 'hoverOffset', label: 'Hover Lift', min: 0, max: 10, step: 1 },
      { key: 'activeOffset', label: 'Active Press', min: 0, max: 10, step: 1 },
    ],
  },
]

type ColorDef = {
  key: keyof ThemeTokens
  label: string
}

const colorPickers: ColorDef[] = [
  { key: 'bgColor', label: 'Background' },
  { key: 'surfaceColor', label: 'Surface' },
  { key: 'textColor', label: 'Text' },
  { key: 'borderColor', label: 'Border' },
  { key: 'shadowColor', label: 'Shadow' },
  { key: 'primaryColor', label: 'Primary' },
  { key: 'secondaryColor', label: 'Secondary' },
  { key: 'dangerColor', label: 'Danger' },
]

export default function TokenPanel() {
  const tokens = useThemeStore((s) => s.tokens)
  const setToken = useThemeStore((s) => s.setToken)
  const setTokens = useThemeStore((s) => s.setTokens)
  const applyPreset = useThemeStore((s) => s.applyPreset)
  const resetTokens = useThemeStore((s) => s.resetTokens)

  return (
    <div
      className="w-72 shrink-0 overflow-y-auto"
      style={{
        borderRight: 'var(--nb-border)',
        background: 'var(--nb-surface)',
        height: '100%',
      }}
    >
      <div style={{ padding: '1rem', borderBottom: 'var(--nb-border)' }}>
        <h2
          style={{
            fontFamily: 'var(--nb-font-heading)',
            fontWeight: 'var(--nb-heading-weight)',
            fontSize: '1.125rem',
            margin: 0,
          }}
        >
          Tokens
        </h2>
      </div>

      <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Presets
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {presets.map((p) => (
            <button
              key={p.name}
              onClick={() => applyPreset(p.tokens)}
              style={{
                border: 'var(--nb-border)',
                borderRadius: 'var(--nb-radius)',
                background: 'var(--nb-bg)',
                color: 'var(--nb-text)',
                padding: '4px 10px',
                fontFamily: 'var(--nb-font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              title={p.description}
            >
              {p.name}
            </button>
          ))}
        </div>
        <button
          onClick={resetTokens}
          style={{
            border: 'var(--nb-border)',
            borderRadius: 'var(--nb-radius)',
            background: 'var(--nb-danger)',
            color: '#fff',
            padding: '6px 12px',
            fontFamily: 'var(--nb-font-body)',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            marginTop: '0.25rem',
          }}
        >
          Reset
        </button>
      </div>

      {sliderGroups.map((group) => (
        <div key={group.title} style={{ padding: '0.75rem', borderTop: 'var(--nb-border)' }}>
          <p style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700, margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {group.title}
          </p>
          {group.sliders.map((slider) => (
            <div key={slider.key} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <label style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem' }}>{slider.label}</label>
                <span style={{ fontFamily: 'var(--nb-font-mono)', fontSize: '0.75rem' }}>
                  {tokens[slider.key]}{slider.key === 'borderWidth' || slider.key === 'shadowOffsetX' || slider.key === 'shadowOffsetY' || slider.key === 'shadowBlur' || slider.key === 'borderRadius' ? '' : ''}
                </span>
              </div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step ?? 1}
                value={tokens[slider.key] as number || 0}
                onChange={(e) => setToken(slider.key, Number(e.target.value) as never)}
                style={{
                  width: '100%',
                  accentColor: 'var(--nb-text)',
                  height: '6px',
                  cursor: 'pointer',
                }}
              />
            </div>
          ))}
        </div>
      ))}

      <div style={{ padding: '0.75rem', borderTop: 'var(--nb-border)' }}>
        <p style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700, margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Colors
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          {colorPickers.map((c) => (
            <div key={c.key} style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
              <label style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.65rem' }}>{c.label}</label>
              <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                <input
                  type="color"
                  value={tokens[c.key] as string || ''}
                  onChange={(e) => setToken(c.key, e.target.value as never)}
                  style={{
                    width: '28px',
                    height: '28px',
                    border: 'var(--nb-border)',
                    borderRadius: 'var(--nb-radius)',
                    padding: 0,
                    cursor: 'pointer',
                    background: 'none',
                  }}
                />
                <input
                  type="text"
                  value={tokens[c.key] as string || ''}
                  onChange={(e) => setToken(c.key, e.target.value as never)}
                  style={{
                    border: 'var(--nb-border)',
                    borderRadius: 'var(--nb-radius)',
                    background: 'var(--nb-bg)',
                    color: 'var(--nb-text)',
                    padding: '2px 4px',
                    fontFamily: 'var(--nb-font-mono)',
                    fontSize: '0.65rem',
                    width: '100%',
                    outline: 'none',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          <p style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.65rem', fontWeight: 700, margin: 0, opacity: 0.7 }}>HARMONY GENERATOR</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem' }}>
            {(['complementary', 'analogous', 'triadic', 'monochromatic'] as HarmonyType[]).map((type) => (
              <button
                key={type}
                onClick={() => {
                  const [bg, surf, text, bord, shad, prim, sec, dang] = generateHarmoniousPalette(tokens.primaryColor, type, 8)
                  setTokens({
                    primaryColor: prim,
                    secondaryColor: sec,
                    dangerColor: dang,
                  })
                }}
                style={{
                  border: 'var(--nb-border)',
                  borderRadius: 'var(--nb-radius)',
                  background: 'var(--nb-surface)',
                  color: 'var(--nb-text)',
                  padding: '3px',
                  fontFamily: 'var(--nb-font-mono)',
                  fontSize: '0.6rem',
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {type.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '0.75rem', borderTop: 'var(--nb-border)' }}>
        <p style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700, margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Effects & Mode
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem' }}>
            <input
              type="checkbox"
              checked={tokens.isDarkMode}
              onChange={(e) => setToken('isDarkMode', e.target.checked)}
              style={{ accentColor: 'var(--nb-text)' }}
            />
            Dark Mode
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem' }}>
            <input
              type="checkbox"
              checked={tokens.grainOverlay}
              onChange={(e) => setToken('grainOverlay', e.target.checked)}
              style={{ accentColor: 'var(--nb-text)' }}
            />
            Grain Overlay
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem' }}>
            <input
              type="checkbox"
              checked={tokens.shakeEnabled}
              onChange={(e) => setToken('shakeEnabled', e.target.checked)}
              style={{ accentColor: 'var(--nb-text)' }}
            />
            Shake Animation
          </label>
        </div>
      </div>

      <div style={{ padding: '0.75rem', borderTop: 'var(--nb-border)' }}>
        <p style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.75rem', fontWeight: 700, margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Fonts
        </p>
        {(['fontDisplay', 'fontHeading', 'fontBody', 'fontMono'] as const).map((key) => (
          <div key={key} style={{ marginBottom: '0.5rem' }}>
            <label style={{ fontFamily: 'var(--nb-font-body)', fontSize: '0.7rem', display: 'block', marginBottom: '0.125rem' }}>
              {key.replace('font', '')}
            </label>
            <select
              value={tokens[key] || ''}
              onChange={(e) => setToken(key, e.target.value as never)}
              style={{
                border: 'var(--nb-border)',
                borderRadius: 'var(--nb-radius)',
                background: 'var(--nb-bg)',
                color: 'var(--nb-text)',
                padding: '4px 6px',
                fontFamily: 'var(--nb-font-mono)',
                fontSize: '0.7rem',
                width: '100%',
                cursor: 'pointer',
              }}
            >
              {fontOptions.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}
