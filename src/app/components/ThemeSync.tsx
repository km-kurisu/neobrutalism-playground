'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/lib/store'

export default function ThemeSync() {
  const tokens = useThemeStore((s) => s.tokens)

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--nb-border-width', `${tokens.borderWidth}px`)
    root.style.setProperty('--nb-border-color', tokens.borderColor)
    root.style.setProperty('--nb-border', `${tokens.borderWidth}px solid ${tokens.borderColor}`)
    root.style.setProperty('--nb-shadow', `${tokens.shadowOffsetX}px ${tokens.shadowOffsetY}px ${tokens.shadowBlur}px ${tokens.shadowColor}`)
    root.style.setProperty('--nb-shadow-sm', `${Math.max(1, tokens.shadowOffsetX - 2)}px ${Math.max(1, tokens.shadowOffsetY - 2)}px ${tokens.shadowBlur}px ${tokens.shadowColor}`)
    root.style.setProperty('--nb-shadow-lg', `${tokens.shadowOffsetX + 3}px ${tokens.shadowOffsetY + 3}px ${tokens.shadowBlur}px ${tokens.shadowColor}`)
    root.style.setProperty('--nb-radius', `${tokens.borderRadius}px`)
    
    if (tokens.isDarkMode) {
      root.style.setProperty('--nb-bg', '#121212')
      root.style.setProperty('--nb-surface', '#1E1E1E')
      root.style.setProperty('--nb-text', '#FFFFFF')
      root.style.setProperty('--nb-border-color', '#FFFFFF')
      root.style.setProperty('--nb-border', `${tokens.borderWidth}px solid #FFFFFF`)
      root.style.setProperty('--nb-shadow', `${tokens.shadowOffsetX}px ${tokens.shadowOffsetY}px ${tokens.shadowBlur}px rgba(255,255,255,0.5)`)
    } else {
      root.style.setProperty('--nb-bg', tokens.bgColor)
      root.style.setProperty('--nb-surface', tokens.surfaceColor)
      root.style.setProperty('--nb-text', tokens.textColor)
      root.style.setProperty('--nb-border-color', tokens.borderColor)
      root.style.setProperty('--nb-border', `${tokens.borderWidth}px solid ${tokens.borderColor}`)
      root.style.setProperty('--nb-shadow', `${tokens.shadowOffsetX}px ${tokens.shadowOffsetY}px ${tokens.shadowBlur}px ${tokens.shadowColor}`)
    }
    
    root.style.setProperty('--nb-primary', tokens.primaryColor)
    root.style.setProperty('--nb-secondary', tokens.secondaryColor)
    root.style.setProperty('--nb-danger', tokens.dangerColor)
    root.style.setProperty('--nb-hover-offset', `-${tokens.hoverOffset}px`)
    root.style.setProperty('--nb-active-offset', `${tokens.activeOffset}px`)
    root.style.setProperty('--nb-heading-weight', `${tokens.headingWeight}`)

    // Dark Mode
    if (tokens.isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Grain Overlay
    let grain = document.getElementById('nb-grain-overlay')
    if (tokens.grainOverlay) {
      if (!grain) {
        grain = document.createElement('div')
        grain.id = 'nb-grain-overlay'
        grain.className = 'grain-overlay'
        document.body.appendChild(grain)
      }
    } else if (grain) {
      grain.remove()
    }

    const fontMap: Record<string, string> = {
      Syne: 'var(--font-syne)',
      'Space Grotesk': 'var(--font-space-grotesk)',
      Inter: 'var(--font-inter)',
      'Space Mono': 'var(--font-space-mono)',
      'Bebas Neue': 'var(--font-bebas-neue)',
      'Archivo Black': 'var(--font-archivo-black)',
      'Plus Jakarta Sans': 'var(--font-plus-jakarta-sans)',
      'DM Sans': 'var(--font-dm-sans)',
      Outfit: 'var(--font-outfit)',
      'JetBrains Mono': 'var(--font-jetbrains-mono)',
    }

    root.style.setProperty('--nb-font-display', fontMap[tokens.fontDisplay] || `'${tokens.fontDisplay}', sans-serif`)
    root.style.setProperty('--nb-font-heading', fontMap[tokens.fontHeading] || `'${tokens.fontHeading}', sans-serif`)
    root.style.setProperty('--nb-font-body', fontMap[tokens.fontBody] || `'${tokens.fontBody}', sans-serif`)
    root.style.setProperty('--nb-font-mono', fontMap[tokens.fontMono] || `'${tokens.fontMono}', monospace`)
  }, [tokens])

  return null
}
