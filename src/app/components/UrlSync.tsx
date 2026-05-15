'use client'

import { useEffect, useRef } from 'react'
import { useThemeStore, ThemeTokens } from '@/lib/store'

export default function UrlSync() {
  const { tokens, setTokens } = useThemeStore()
  const isInitial = useRef(true)

  // Load from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const state = params.get('theme')
    if (state) {
      try {
        const decoded = JSON.parse(atob(state))
        setTokens(decoded)
      } catch (e) {
        console.error('Failed to parse theme from URL', e)
      }
    }
    isInitial.current = false
  }, [setTokens])

  // Save to URL on change
  useEffect(() => {
    if (isInitial.current) return

    const timeout = setTimeout(() => {
      const state = btoa(JSON.stringify(tokens))
      const url = new URL(window.location.href)
      url.searchParams.set('theme', state)
      window.history.replaceState({}, '', url.toString())
    }, 500)

    return () => clearTimeout(timeout)
  }, [tokens])

  return null
}
