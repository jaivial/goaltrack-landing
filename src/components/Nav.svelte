<script>
  import { lang, setLang, t } from '../lib/i18n.svelte.js'
  import { LANGS } from '../lib/translations.js'

  let open = $state(false)
  let scrolled = $state(false)

  function onScroll() { scrolled = window.scrollY > 24 }
  const tr = $derived(t())

  function pick(code) { setLang(code); open = false }
</script>

<svelte:window on:scroll={onScroll} />

<header class:scrolled>
  <div class="container bar">
    <a class="logo" href="#top" aria-label="GoalTrack">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="2" y="2" width="8" height="8" rx="2" fill="#34d399"/><rect x="12" y="2" width="8" height="8" rx="2" fill="#18653c"/><rect x="22" y="2" width="8" height="8" rx="2" fill="#34d399"/>
        <rect x="2" y="12" width="8" height="8" rx="2" fill="#1d2a24"/><rect x="12" y="12" width="8" height="8" rx="2" fill="#34d399"/><rect x="22" y="12" width="8" height="8" rx="2" fill="#222"/>
        <rect x="2" y="22" width="8" height="8" rx="2" fill="#34d399"/><rect x="12" y="22" width="8" height="8" rx="2" fill="#1d2a24"/><rect x="22" y="22" width="8" height="8" rx="2" fill="#34d399"/>
      </svg>
      <span>GoalTrack</span>
    </a>

    <nav class="links" aria-label="Main">
      <a href="#features">{tr.nav.features}</a>
      <a href="#screens">{tr.nav.screens}</a>
      <a href="#videos">{tr.nav.videos}</a>
      <a href="#mobile">{tr.nav.mobile}</a>
    </nav>

    <div class="right">
      <div class="lang" class:open>
        <button class="lang-btn" aria-haspopup="listbox" aria-expanded={open} onclick={() => (open = !open)}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          {lang.code.toUpperCase()}
        </button>
        {#if open}
          <ul role="listbox">
            {#each LANGS as l (l.code)}
              <li>
                <button role="option" aria-selected={lang.code === l.code} class:active={lang.code === l.code} onclick={() => pick(l.code)}>{l.label}</button>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
      <a class="cta" href="https://goaltrack.menustudioai.com" target="_blank" rel="noopener">{tr.nav.open}</a>
    </div>
  </div>
</header>

<style>
  header {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 50;
    transition: background 0.3s, border-color 0.3s;
    border-bottom: 1px solid transparent;
  }
  header.scrolled {
    background: rgba(10, 11, 10, 0.82);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-color: var(--line);
  }
  .bar {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 68px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: -0.01em;
  }
  .links {
    display: flex;
    gap: 1.75rem;
    margin-inline: auto;
  }
  .links a {
    font-size: 0.92rem;
    color: var(--muted);
    transition: color 0.2s;
    padding: 0.5rem 0;
  }
  .links a:hover { color: var(--text); }
  .right { display: flex; align-items: center; gap: 0.9rem; }
  .lang { position: relative; }
  .lang-btn {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    background: none;
    border: 1px solid var(--line);
    color: var(--muted);
    border-radius: 999px;
    padding: 0.5rem 0.9rem;
    font-size: 0.82rem;
    min-height: 44px;
    transition: color 0.2s, border-color 0.2s;
  }
  .lang-btn:hover, .lang.open .lang-btn { color: var(--text); border-color: rgba(255, 255, 255, 0.25); }
  .lang ul {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    list-style: none;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 0.35rem;
    min-width: 150px;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
  }
  .lang ul button {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: 0;
    color: var(--muted);
    padding: 0.55rem 0.8rem;
    border-radius: 9px;
    font-size: 0.88rem;
    min-height: 44px;
  }
  .lang ul button:hover { color: var(--text); background: rgba(255, 255, 255, 0.05); }
  .lang ul button.active { color: var(--mint); }
  .cta {
    background: var(--mint);
    color: #06120c;
    font-weight: 700;
    font-size: 0.88rem;
    border-radius: 999px;
    padding: 0.7rem 1.1rem;
    min-height: 44px;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .cta:hover { transform: translateY(-1px); box-shadow: 0 8px 30px rgba(52, 211, 153, 0.35); }
  @media (max-width: 720px) {
    .links { display: none; }
    .bar { justify-content: space-between; }
  }
</style>
