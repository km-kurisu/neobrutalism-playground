import { create } from 'zustand'

export interface ThemeTokens {
  borderWidth: number
  borderColor: string
  shadowOffsetX: number
  shadowOffsetY: number
  shadowBlur: number
  shadowColor: string
  borderRadius: number
  bgColor: string
  surfaceColor: string
  textColor: string
  primaryColor: string
  secondaryColor: string
  dangerColor: string
  fontDisplay: string
  fontHeading: string
  fontBody: string
  fontMono: string
  headingWeight: number
  // New tokens
  hoverOffset: number
  activeOffset: number
  shakeEnabled: boolean
  grainOverlay: boolean
  isDarkMode: boolean
}

interface ThemeStore {
  tokens: ThemeTokens
  setToken: <K extends keyof ThemeTokens>(key: K, value: ThemeTokens[K]) => void
  setTokens: (partial: Partial<ThemeTokens>) => void
  resetTokens: () => void
  applyPreset: (preset: ThemeTokens) => void
}

const defaultTokens: ThemeTokens = {
  borderWidth: 3,
  borderColor: '#000000',
  shadowOffsetX: 5,
  shadowOffsetY: 5,
  shadowBlur: 0,
  shadowColor: '#000000',
  borderRadius: 0,
  bgColor: '#FFFDF5',
  surfaceColor: '#FFFFFF',
  textColor: '#000000',
  primaryColor: '#FFD23F',
  secondaryColor: '#FF6B6B',
  dangerColor: '#FF4444',
  fontDisplay: 'Syne',
  fontHeading: 'Space Grotesk',
  fontBody: 'Inter',
  fontMono: 'Space Mono',
  headingWeight: 700,
  hoverOffset: 2,
  activeOffset: 4,
  shakeEnabled: false,
  grainOverlay: false,
  isDarkMode: false,
}

export const useThemeStore = create<ThemeStore>((set) => ({
  tokens: { ...defaultTokens },
  setToken: (key, value) =>
    set((state) => ({ tokens: { ...state.tokens, [key]: value } })),
  setTokens: (partial) =>
    set((state) => ({ tokens: { ...state.tokens, ...partial } })),
  resetTokens: () => set({ tokens: { ...defaultTokens } }),
  applyPreset: (preset) => set({ tokens: { ...preset } }),
}))
