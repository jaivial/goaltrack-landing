<script>
  import { t } from '../lib/i18n.svelte.js'
  import { reveal } from '../lib/reveal.js'
  const tr = $derived(t())
  const LCDN = 'https://villacarmenmedia.b-cdn.net/goaltrack-landing/videos'
  const PCDN = 'https://jaimedigitalstudio.b-cdn.net/videos/goaltrack'

  const videos = [
    {
      src: `${PCDN}/goaltrack-promo-4x5.mp4`,
      poster: `${LCDN}/poster_portfolio_4x5.jpg`,
      label: 'GoalTrack promo · 4:5',
      width: 1080,
      height: 1350
    },
    {
      src: `${LCDN}/goaltrack-v2-wide.mp4`,
      poster: `${LCDN}/poster_v2_wide.jpg`,
      label: 'GoalTrack — the mosaic · 16:9',
      width: 1920,
      height: 1080
    },
    {
      src: `${LCDN}/goaltrack-v2-portrait.mp4`,
      poster: `${LCDN}/poster_v2_portrait.jpg`,
      label: 'GoalTrack — the check-in · 4:5',
      width: 1080,
      height: 1350
    }
  ]
</script>

<section id="videos">
  <div class="container">
    <p class="kicker reveal" use:reveal>{tr.videos.kicker}</p>
    <h2 class="reveal" use:reveal={{ delay: 80 }}>{tr.videos.title}</h2>

    <div class="grid">
      {#each videos as v (v.src)}
        <figure class="reveal" use:reveal={{ delay: 120 }}>
          <video
            controls
            preload="none"
            playsinline
            poster={v.poster}
            width={v.width}
            height={v.height}
            style="aspect-ratio: {v.width} / {v.height}; object-fit: cover;"
          >
            <source src={v.src} type="video/mp4" />
          </video>
          <figcaption>{v.label}</figcaption>
        </figure>
      {/each}
    </div>
  </div>
</section>

<style>
  section { padding: 6.5rem 0; }
  h2 {
    font-size: clamp(1.9rem, 4.2vw, 3.2rem);
    max-width: 22ch;
    margin-bottom: 3rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
  }
  figure {
    margin: 0;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--bg2);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
  }
  video {
    width: 100%;
    height: auto;
    display: block;
    background: #000;
  }
  figcaption {
    padding: 0.85rem 1.1rem;
    font-size: 0.85rem;
    color: var(--muted);
    border-top: 1px solid var(--line);
    letter-spacing: 0.04em;
  }
  @media (max-width: 900px) {
    .grid { grid-template-columns: 1fr; max-width: 480px; margin-inline: auto; }
  }
</style>
