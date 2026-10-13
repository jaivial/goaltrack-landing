<script>
  import { t } from '../lib/i18n.svelte.js'
  import { reveal } from '../lib/reveal.js'
  const tr = $derived(t())
  const feats = $derived([tr.features.f1, tr.features.f2, tr.features.f3, tr.features.f4, tr.features.f5])

  const icons = [
    'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
    'M13 2L4.5 12.5H11L9.5 22 19 10.5h-6.5L13 2z',
    'M12 3a9 9 0 1 0 9 9M12 3a9 9 0 0 1 9 9m-9-9v9l6.4 4.2',
    'M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0zM2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z',
    'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4zM9 12l2 2 4-4'
  ]
</script>

<section id="features">
  <div class="container">
    <p class="kicker reveal" use:reveal>{tr.features.kicker}</p>
    <h2 class="reveal" use:reveal={{ delay: 80 }}>{tr.features.title}</h2>

    <div class="grid">
      {#each feats as f, i (f.t)}
        <article class="reveal" class:wide={i === 0} use:reveal={{ delay: i * 70 }}>
          <div class="ic" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d={icons[i]} /></svg>
          </div>
          <h3>{f.t}</h3>
          <p>{f.d}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  section { padding: 6.5rem 0; }
  h2 {
    font-size: clamp(1.9rem, 4.2vw, 3.2rem);
    max-width: 22ch;
    margin-bottom: 3.5rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.1rem;
  }
  article {
    grid-column: span 2;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 1.7rem 1.6rem 1.9rem;
    transition: transform 0.3s, border-color 0.3s;
  }
  article:hover { transform: translateY(-4px); border-color: rgba(52, 211, 153, 0.35); }
  article.wide { grid-column: span 6; background: linear-gradient(120deg, #10221a, var(--card) 55%); }
  article.wide :global(h3) { font-size: 1.5rem; }
  article.wide p { max-width: 62ch; }
  .ic {
    width: 46px;
    height: 46px;
    border-radius: 13px;
    background: var(--mint-dim);
    display: grid;
    place-items: center;
    margin-bottom: 1.2rem;
  }
  h3 { font-size: 1.12rem; margin-bottom: 0.55rem; letter-spacing: -0.01em; }
  p { color: var(--muted); font-size: 0.95rem; }
  @media (max-width: 900px) {
    article { grid-column: span 3; }
    article.wide { grid-column: span 6; }
  }
  @media (max-width: 620px) {
    article { grid-column: span 6; }
    article.wide :global(h3) { font-size: 1.3rem; }
  }
</style>
