import type { ThemeTokens } from './store'

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return null
  const num = Number.parseInt(clean, 16)
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
}

function luminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

export function contrastRatio(hex1: string, hex2: string): number {
  const c1 = hexToRgb(hex1)
  const c2 = hexToRgb(hex2)
  if (!c1 || !c2) return 0
  const l1 = luminance(c1.r, c1.g, c1.b)
  const l2 = luminance(c2.r, c2.g, c2.b)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

export function contrastLevel(ratio: number): { aa: boolean; aaa: boolean; aaLarge: boolean } {
  return {
    aa: ratio >= 4.5,
    aaa: ratio >= 7,
    aaLarge: ratio >= 3,
  }
}

export function generateCSS(t: ThemeTokens): string {
  return `:root {
  --nb-border: ${t.borderWidth}px solid ${t.borderColor};
  --nb-border-width: ${t.borderWidth}px;
  --nb-border-color: ${t.borderColor};
  --nb-shadow: ${t.shadowOffsetX}px ${t.shadowOffsetY}px ${t.shadowBlur}px ${t.shadowColor};
  --nb-shadow-sm: ${Math.max(1, t.shadowOffsetX - 2)}px ${Math.max(1, t.shadowOffsetY - 2)}px ${t.shadowBlur}px ${t.shadowColor};
  --nb-shadow-lg: ${t.shadowOffsetX + 3}px ${t.shadowOffsetY + 3}px ${t.shadowBlur}px ${t.shadowColor};
  --nb-radius: ${t.borderRadius}px;
  --nb-bg: ${t.bgColor};
  --nb-surface: ${t.surfaceColor};
  --nb-text: ${t.textColor};
  --nb-primary: ${t.primaryColor};
  --nb-secondary: ${t.secondaryColor};
  --nb-danger: ${t.dangerColor};
  --nb-font-display: '${t.fontDisplay}', sans-serif;
  --nb-font-heading: '${t.fontHeading}', sans-serif;
  --nb-font-body: '${t.fontBody}', sans-serif;
  --nb-font-mono: '${t.fontMono}', monospace;
  --nb-heading-weight: ${t.headingWeight};
}`
}

export function generateTailwindConfig(t: ThemeTokens): string {
  return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderWidth: {
        nb: '${t.borderWidth}px',
      },
      borderColor: {
        nb: '${t.borderColor}',
      },
      borderRadius: {
        nb: '${t.borderRadius}px',
      },
      boxShadow: {
        nb: '${t.shadowOffsetX}px ${t.shadowOffsetY}px ${t.shadowBlur}px ${t.shadowColor}',
        'nb-sm': '${Math.max(1, t.shadowOffsetX - 2)}px ${Math.max(1, t.shadowOffsetY - 2)}px ${t.shadowBlur}px ${t.shadowColor}',
        'nb-lg': '${t.shadowOffsetX + 3}px ${t.shadowOffsetY + 3}px ${t.shadowBlur}px ${t.shadowColor}',
      },
      colors: {
        nb: {
          bg: '${t.bgColor}',
          surface: '${t.surfaceColor}',
          text: '${t.textColor}',
          primary: '${t.primaryColor}',
          secondary: '${t.secondaryColor}',
          danger: '${t.dangerColor}',
        },
      },
      fontFamily: {
        display: ['${t.fontDisplay}', 'sans-serif'],
        heading: ['${t.fontHeading}', 'sans-serif'],
        body: ['${t.fontBody}', 'sans-serif'],
        mono: ['${t.fontMono}', 'monospace'],
      },
      fontWeight: {
        nb: '${t.headingWeight}',
      },
    },
  },
}`
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const rgb = hexToRgb(hex)
  if (!rgb) return { h: 0, s: 0, l: 0 }
  let { r, g, b } = rgb
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0, l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

export function hslToHex(h: number, s: number, l: number): string {
  s /= 100; l /= 100
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export type HarmonyType = 'random' | 'complementary' | 'analogous' | 'triadic' | 'split-complementary' | 'monochromatic'

export function generateHarmoniousPalette(baseHex?: string, type: HarmonyType = 'analogous', count: number = 6): string[] {
  const base = baseHex ? hexToHsl(baseHex) : { h: Math.floor(Math.random() * 360), s: 70 + Math.floor(Math.random() * 25), l: 50 + Math.floor(Math.random() * 20) }

  switch (type) {
    case 'random':
      return Array.from({ length: count }, () => {
        const h = Math.floor(Math.random() * 360)
        const s = 40 + Math.floor(Math.random() * 50)
        const l = 25 + Math.floor(Math.random() * 55)
        return hslToHex(h, s, l)
      })

    case 'complementary': {
      const hues = [base.h, (base.h + 180) % 360]
      const result: string[] = []
      for (let i = 0; i < count; i++) {
        const h = hues[i % 2] + (i >= 2 ? (i % 2 === 0 ? 10 : -10) : 0)
        const s = Math.min(100, base.s + (i % 3 - 1) * 10)
        const l = i === 0 ? base.l : (i % 2 === 0 ? base.l - 20 : base.l + 10)
        result.push(hslToHex(Math.round((h + 360) % 360), s, Math.min(90, Math.max(10, l))))
      }
      return result
    }

    case 'analogous': {
      const offsets = [0, -30, 30, -60, 60, -90]
      return offsets.slice(0, count).map((off, i) => {
        const h = (base.h + off + 360) % 360
        const s = i === 0 ? base.s : base.s - 5 + (i % 3) * 5
        const l = i === 0 ? base.l : base.l - 15 + (i % 2) * 20
        return hslToHex(Math.round(h), Math.min(100, Math.max(20, s)), Math.min(90, Math.max(10, l)))
      })
    }

    case 'triadic': {
      const hues = [base.h, (base.h + 120) % 360, (base.h + 240) % 360]
      return Array.from({ length: count }, (_, i) => {
        const h = hues[i % 3] + (i >= 3 ? 10 : 0)
        const s = base.s - (i % 3) * 5
        const l = i < 3 ? base.l : base.l - 20
        return hslToHex(Math.round((h + 360) % 360), Math.min(100, Math.max(20, s)), Math.min(90, Math.max(10, l)))
      })
    }

    case 'split-complementary': {
      const hues = [base.h, (base.h + 150) % 360, (base.h + 210) % 360]
      return Array.from({ length: count }, (_, i) => {
        const h = hues[i % 3] + (i >= 3 ? (i % 2 === 0 ? 8 : -8) : 0)
        const s = base.s - (i % 3) * 8
        const l = i < 3 ? base.l : base.l - 15
        return hslToHex(Math.round((h + 360) % 360), Math.min(100, Math.max(20, s)), Math.min(90, Math.max(10, l)))
      })
    }

    case 'monochromatic': {
      return Array.from({ length: count }, (_, i) => {
        const l = Math.min(85, Math.max(10, base.l - 30 + i * 12))
        const s = Math.min(100, Math.max(10, base.s - i * 5))
        return hslToHex(base.h, s, l)
      })
    }

    default:
      return Array.from({ length: count }, () => {
        const h = Math.floor(Math.random() * 360)
        const s = 40 + Math.floor(Math.random() * 50)
        const l = 25 + Math.floor(Math.random() * 55)
        return hslToHex(h, s, l)
      })
  }
}

export function generateComponentCSS(component: string, t: ThemeTokens): string {
  const shared = `border: ${t.borderWidth}px solid ${t.borderColor};
border-radius: ${t.borderRadius}px;`

  switch (component) {
    case 'button':
      return `.btn-nb {
  ${shared}
  background: ${t.primaryColor};
  color: ${t.textColor};
  box-shadow: ${t.shadowOffsetX}px ${t.shadowOffsetY}px ${t.shadowBlur}px ${t.shadowColor};
  padding: 12px 24px;
  font-weight: ${t.headingWeight};
  cursor: pointer;
  transition: all 0.1s ease;
}

.btn-nb:hover {
  transform: translate(-2px, -2px);
  box-shadow: ${t.shadowOffsetX + 2}px ${t.shadowOffsetY + 2}px ${t.shadowBlur}px ${t.shadowColor};
}

.btn-nb:active {
  transform: translate(${t.shadowOffsetX}px, ${t.shadowOffsetY}px);
  box-shadow: none;
}`
    case 'card':
      return `.card-nb {
  ${shared}
  background: ${t.surfaceColor};
  box-shadow: ${t.shadowOffsetX}px ${t.shadowOffsetY}px ${t.shadowBlur}px ${t.shadowColor};
  padding: 1.5rem;
  transition: transform 0.15s, box-shadow 0.15s;
}

.card-nb:hover {
  transform: translate(-2px, -2px);
  box-shadow: ${t.shadowOffsetX + 2}px ${t.shadowOffsetY + 2}px ${t.shadowBlur}px ${t.shadowColor};
}`
    case 'input':
      return `.input-nb {
  ${shared}
  background: ${t.surfaceColor};
  color: ${t.textColor};
  box-shadow: ${Math.max(1, t.shadowOffsetX - 2)}px ${Math.max(1, t.shadowOffsetY - 2)}px ${t.shadowBlur}px ${t.shadowColor};
  padding: 10px 14px;
  width: 100%;
  transition: box-shadow 0.15s, transform 0.15s;
}

.input-nb:focus {
  outline: 3px solid ${t.primaryColor};
  outline-offset: 2px;
  box-shadow: ${t.shadowOffsetX}px ${t.shadowOffsetY}px ${t.shadowBlur}px ${t.shadowColor};
  transform: translate(-1px, -1px);
}`
    default:
      return ''
  }
}
