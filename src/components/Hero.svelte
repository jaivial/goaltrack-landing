<script>
  import { t } from '../lib/i18n.svelte.js'
  import { reveal } from '../lib/reveal.js'
  const CDN = 'https://villacarmenmedia.b-cdn.net/goaltrack-landing'
  const tr = $derived(t())
</script>

<section id="top">
  <div class="container">
    <p class="kicker reveal" use:reveal>{tr.hero.kicker}</p>
    <h1 class="reveal" use:reveal={{ delay: 80 }}>
      {tr.hero.title1}<br /><em>{tr.hero.title2}</em>
    </h1>
    <p class="sub reveal" use:reveal={{ delay: 160 }}>{tr.hero.sub}</p>
    <div class="actions reveal" use:reveal={{ delay: 240 }}>
      <a class="primary" href="https://goaltrack.menustudioai.com" target="_blank" rel="noopener">{tr.hero.cta}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
      </a>
      <a class="ghost" href="#features">{tr.hero.cta2}</a>
    </div>
    <p class="note reveal" use:reveal={{ delay: 300 }}>{tr.hero.note}</p>

    <div class="shot reveal" use:reveal={{ delay: 200 }}>
      <div class="frame">
        <div class="frame-bar"><i></i><i></i><i></i></div>
        <img src={`${CDN}/desktop_goal_detail.png`} alt="GoalTrack habit detail with a 26-week mosaic of daily squares" width="1440" height="900" style="aspect-ratio: 1440 / 900; object-fit: cover;" fetchpriority="high" />
      </div>
      <div class="glow" aria-hidden="true"></div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 9.5rem 0 4rem;
    position: relative;
  }
  h1 {
    font-size: clamp(3rem, 9.5vw, 7.2rem);
    max-width: 12ch;
  }
  h1 em {
    font-style: normal;
    color: var(--mint);
  }
  .sub {
    margin-top: 1.6rem;
    max-width: 54ch;
    color: var(--muted);
    font-size: clamp(1rem, 1.4vw, 1.18rem);
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2.2rem;
  }
  .primary, .ghost {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 52px;
    padding: 0.95rem 1.7rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.98rem;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .primary {
    background: var(--mint);
    color: #06120c;
  }
  .primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(52, 211, 153, 0.35); }
  .primary svg { transition: transform 0.2s; }
  .primary:hover svg { transform: translate(2px, -2px); }
  .ghost {
    border: 1px solid var(--line);
    color: var(--text);
  }
  .ghost:hover { border-color: rgba(255, 255, 255, 0.3); }
  .note {
    margin-top: 1.1rem;
    font-size: 0.82rem;
    color: var(--muted);
    letter-spacing: 0.04em;
  }
  .shot {
    position: relative;
    margin-top: 4.5rem;
  }
  .frame {
    position: relative;
    z-index: 1;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--bg2);
    box-shadow: 0 40px 120px rgba(0, 0, 0, 0.6);
  }
  .frame-bar {
    display: flex;
    gap: 6px;
    padding: 12px 14px;
    border-bottom: 1px solid var(--line);
  }
  .frame-bar i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.14);
  }
  .frame-bar i:first-child { background: rgba(52, 211, 153, 0.55); }
  .glow {
    position: absolute;
    inset: -10% -6%;
    background: radial-gradient(50% 55% at 60% 45%, rgba(52, 211, 153, 0.16), transparent 70%);
    pointer-events: none;
  }
  @media (max-width: 720px) {
    section { padding-top: 7.5rem; }
  }
</style>
