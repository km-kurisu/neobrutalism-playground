import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ThemeTokens } from "./store"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function contrastRatio(color1: string, color2: string) {
  const getL = (c: string) => {
    let rgb = c.startsWith('#') ? hexToRgb(c) : [0, 0, 0]
    const res = rgb.map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * res[0] + 0.7152 * res[1] + 0.0722 * res[2]
  }
  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0]
  }
  const l1 = getL(color1)
  const l2 = getL(color2)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

export function contrastLevel(ratio: number) {
  return {
    aa: ratio >= 4.5,
    aaa: ratio >= 7,
  }
}

export function generateCSS(tokens: ThemeTokens) {
  return `:root {
  --nb-border: ${tokens.borderWidth}px solid ${tokens.borderColor};
  --nb-border-width: ${tokens.borderWidth}px;
  --nb-border-color: ${tokens.borderColor};
  --nb-shadow: ${tokens.shadowOffsetX}px ${tokens.shadowOffsetY}px 0 0 ${tokens.borderColor};
  --nb-radius: ${tokens.borderRadius}px;
  --nb-bg: ${tokens.bgColor};
  --nb-surface: ${tokens.surfaceColor};
  --nb-text: ${tokens.textColor};
  --nb-primary: ${tokens.primaryColor};
  --nb-secondary: ${tokens.secondaryColor};
  --nb-danger: ${tokens.dangerColor};
  --nb-font-display: '${tokens.fontDisplay}', sans-serif;
  --nb-font-heading: '${tokens.fontHeading}', sans-serif;
  --nb-font-body: '${tokens.fontBody}', sans-serif;
  --nb-heading-weight: ${tokens.headingWeight};
  --nb-hover-offset: ${tokens.hoverOffset}px;
  --nb-active-offset: ${tokens.activeOffset}px;
}`
}

export function generateTailwindConfig(tokens: ThemeTokens) {
  return `module.exports = {
  theme: {
    extend: {
      colors: {
        nb: {
          bg: '${tokens.bgColor}',
          surface: '${tokens.surfaceColor}',
          text: '${tokens.textColor}',
          primary: '${tokens.primaryColor}',
          secondary: '${tokens.secondaryColor}',
          danger: '${tokens.dangerColor}',
          border: '${tokens.borderColor}',
        }
      },
      borderWidth: {
        nb: '${tokens.borderWidth}px',
      },
      boxShadow: {
        nb: '${tokens.shadowOffsetX}px ${tokens.shadowOffsetY}px 0 0 ${tokens.borderColor}',
        'nb-lg': '${tokens.shadowOffsetX + 2}px ${tokens.shadowOffsetY + 2}px 0 0 ${tokens.borderColor}',
      },
      borderRadius: {
        nb: '${tokens.borderRadius}px',
      },
      fontFamily: {
        display: ['${tokens.fontDisplay}', 'sans-serif'],
        heading: ['${tokens.fontHeading}', 'sans-serif'],
        body: ['${tokens.fontBody}', 'sans-serif'],
      }
    }
  }
}`
}

export type HarmonyType = 'complementary' | 'analogous' | 'triadic' | 'monochromatic'

export function generateHarmoniousPalette(baseColor: string, type: HarmonyType): Partial<ThemeTokens> {
  const [h, s, l] = hexToHsl(baseColor)

  switch (type) {
    case 'complementary':
      return {
        primaryColor: baseColor,
        secondaryColor: hslToHex((h + 180) % 360, s, l),
      }
    case 'analogous':
      return {
        primaryColor: baseColor,
        secondaryColor: hslToHex((h + 30) % 360, s, l),
      }
    case 'triadic':
      return {
        primaryColor: baseColor,
        secondaryColor: hslToHex((h + 120) % 360, s, l),
        dangerColor: hslToHex((h + 240) % 360, s, l),
      }
    case 'monochromatic':
      return {
        primaryColor: baseColor,
        secondaryColor: hslToHex(h, s, Math.max(0, l - 20)),
        surfaceColor: hslToHex(h, s, Math.min(100, l + 40)),
      }
    default:
      return {}
  }
}

function hexToHsl(hex: string): [number, number, number] {
  let r = 0, g = 0, b = 0
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  } else {
    r = parseInt(hex.substring(1, 3), 16)
    g = parseInt(hex.substring(3, 5), 16)
    b = parseInt(hex.substring(5, 7), 16)
  }
  r /= 255, g /= 255, b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0, l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }
  return [h * 360, s * 100, l * 100]
}

function hslToHex(h: number, s: number, l: number): string {
  l /= 100
  const a = s * Math.min(l, 1 - l) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export function generateComponentCSS(type: string, tokens: ThemeTokens) {
  const border = `${tokens.borderWidth}px solid ${tokens.borderColor}`
  const shadow = `${tokens.shadowOffsetX}px ${tokens.shadowOffsetY}px 0 0 ${tokens.borderColor}`
  const radius = `${tokens.borderRadius}px`

  switch (type) {
    case 'button':
      return `.btn-nb {
  border: ${border};
  border-radius: ${radius};
  background: ${tokens.primaryColor};
  color: ${tokens.textColor};
  box-shadow: ${shadow};
  padding: 10px 20px;
  font-weight: ${tokens.headingWeight};
  transition: all 0.1s ease;
  cursor: pointer;
}
.btn-nb:hover {
  transform: translate(-2px, -2px);
  box-shadow: ${tokens.shadowOffsetX + 2}px ${tokens.shadowOffsetY + 2}px 0 0 ${tokens.borderColor};
}
.btn-nb:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}`
    case 'card':
      return `.card-nb {
  border: ${border};
  border-radius: ${radius};
  background: ${tokens.surfaceColor};
  box-shadow: ${shadow};
  padding: 24px;
}`
    case 'input':
      return `.input-nb {
  border: ${border};
  border-radius: ${radius};
  background: ${tokens.bgColor};
  color: ${tokens.textColor};
  padding: 10px 14px;
  width: 100%;
}`
    default:
      return `/* Component CSS for ${type} coming soon */`
  }
}
