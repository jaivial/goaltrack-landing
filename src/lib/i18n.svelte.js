// i18n store — Svelte 5 runes module. Hash-based routing: #/es etc.
import { T, LANGS } from './translations.js'

const CODES = LANGS.map(l => l.code)

function initial() {
  const h = location.hash.match(/^#\/([a-z]{2})/)
  if (h && CODES.includes(h[1])) return h[1]
  const saved = localStorage.getItem('gt-lang')
  if (saved && CODES.includes(saved)) return saved
  const nav = navigator.language?.slice(0, 2)
  return CODES.includes(nav) ? nav : 'en'
}

export const lang = $state({ code: initial() })

export function setLang(code) {
  if (!CODES.includes(code)) return
  lang.code = code
  localStorage.setItem('gt-lang', code)
  document.documentElement.lang = code
  history.replaceState(null, '', code === 'en' ? '#' : `#/${code}`)
}

// apply once at startup
document.documentElement.lang = lang.code
if (location.hash.match(/^#\/([a-z]{2})/)?.[1] !== lang.code && lang.code !== 'en') {
  history.replaceState(null, '', `#/${lang.code}`)
}

// follow manual hash edits / shared links without reload
window.addEventListener('hashchange', () => {
  const m = location.hash.match(/^#\/([a-z]{2})/)
  const code = m?.[1] ?? 'en'
  if (CODES.includes(code) && code !== lang.code) {
    lang.code = code
    localStorage.setItem('gt-lang', code)
    document.documentElement.lang = code
  }
})

export function t() {
  return T[lang.code]
}
