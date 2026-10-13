<script>
  import { t } from '../lib/i18n.svelte.js'
  import { reveal } from '../lib/reveal.js'
  const tr = $derived(t())
</script>

<section id="get">
  <div class="container box reveal" use:reveal>
    <h2>{tr.cta.title}</h2>
    <p>{tr.cta.sub}</p>
    <a href="https://goaltrack.menustudioai.com" target="_blank" rel="noopener">{tr.cta.button}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
    </a>
  </div>
</section>

<style>
  section { padding: 5rem 0 7rem; }
  .box {
    text-align: center;
    background:
      radial-gradient(60% 120% at 50% 0%, rgba(52, 211, 153, 0.12), transparent 65%),
      var(--card);
    border: 1px solid var(--line);
    border-radius: 28px;
    padding: clamp(2.6rem, 6vw, 4.5rem) 1.5rem;
  }
  h2 {
    font-size: clamp(2rem, 5vw, 3.6rem);
    max-width: 16ch;
    margin-inline: auto;
  }
  p {
    margin: 1.1rem auto 2rem;
    color: var(--muted);
    max-width: 44ch;
  }
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    background: var(--mint);
    color: #06120c;
    font-weight: 700;
    border-radius: 999px;
    padding: 1rem 2rem;
    min-height: 52px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  a:hover { transform: translateY(-2px); box-shadow: 0 12px 44px rgba(52, 211, 153, 0.4); }
</style>
