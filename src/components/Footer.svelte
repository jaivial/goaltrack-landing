<script>
  import { t } from '../lib/i18n.svelte.js'
  import { LANGS } from '../lib/translations.js'
  import { lang, setLang } from '../lib/i18n.svelte.js'
  const tr = $derived(t())
  const year = new Date().getFullYear()
</script>

<footer>
  <div class="container">
    <div class="cols">
      <div>
        <p class="logo">
          <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
            <rect x="2" y="2" width="8" height="8" rx="2" fill="#34d399"/><rect x="12" y="12" width="8" height="8" rx="2" fill="#34d399"/><rect x="22" y="22" width="8" height="8" rx="2" fill="#34d399"/><rect x="22" y="2" width="8" height="8" rx="2" fill="#18653c"/><rect x="2" y="22" width="8" height="8" rx="2" fill="#18653c"/>
          </svg>
          GoalTrack
        </p>
        <p class="tag">{tr.footer.tagline}</p>
      </div>
      <div>
        <p class="head">{tr.footer.product}</p>
        <a href="https://goaltrack.menustudioai.com" target="_blank" rel="noopener">goaltrack.menustudioai.com</a>
        <a href="https://github.com/jaivial/goaltrack" target="_blank" rel="noopener">GitHub — {tr.footer.open}</a>
      </div>
      <div>
        <p class="head">Language</p>
        <div class="langs">
          {#each LANGS as l (l.code)}
            <button class:active={lang.code === l.code} onclick={() => setLang(l.code)}>{l.label}</button>
          {/each}
        </div>
      </div>
    </div>
    <p class="fine">© {year} GoalTrack. Screenshots hosted on Bunny CDN.</p>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--line);
    padding: 3.5rem 0 2.5rem;
  }
  .cols {
    display: grid;
    grid-template-columns: 2fr 1.4fr 1.2fr;
    gap: 2.5rem;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
  }
  .tag { color: var(--muted); margin-top: 0.6rem; font-size: 0.92rem; }
  .head {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--muted);
    margin-bottom: 0.9rem;
  }
  footer a {
    display: block;
    color: var(--muted);
    font-size: 0.92rem;
    padding: 0.28rem 0;
    transition: color 0.2s;
  }
  footer a:hover { color: var(--text); }
  .langs { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .langs button {
    background: none;
    border: 1px solid var(--line);
    color: var(--muted);
    border-radius: 999px;
    padding: 0.4rem 0.85rem;
    font-size: 0.82rem;
    min-height: 44px;
    transition: color 0.2s, border-color 0.2s;
  }
  .langs button:hover { color: var(--text); }
  .langs button.active { color: var(--mint); border-color: rgba(52, 211, 153, 0.4); }
  .fine {
    margin-top: 2.8rem;
    color: var(--muted);
    font-size: 0.8rem;
    opacity: 0.7;
  }
  @media (max-width: 720px) {
    .cols { grid-template-columns: 1fr; gap: 2rem; }
  }
</style>
