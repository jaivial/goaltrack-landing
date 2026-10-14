<script>
  import { t } from '../lib/i18n.svelte.js'
  import { reveal } from '../lib/reveal.js'
  const tr = $derived(t())
  const PCDN = 'https://jaimedigitalstudio.b-cdn.net/images/goaltrack'
</script>

<section id="screens">
  <div class="container">
    <p class="kicker reveal" use:reveal>{tr.gallery.kicker}</p>
    <h2 class="reveal" use:reveal={{ delay: 80 }}>{tr.gallery.title}</h2>

    <div class="grid reveal" use:reveal={{ delay: 160 }}>
      <figure class="wide-shot">
        <img src={`${PCDN}/gt-01b-today-wide.webp`} alt="GoalTrack Today view: daily habits with check-in squares" width="1440" height="900" loading="lazy" style="aspect-ratio: 1440 / 900; object-fit: cover;" />
      </figure>
      <figure>
        <img src={`${PCDN}/gt-02-detail.webp`} alt="Goal detail: current streak, best streak and a 26-week heatmap mosaic" width="1050" height="741" loading="lazy" style="aspect-ratio: 1050 / 741; object-fit: cover;" />
      </figure>
      <figure class="tall">
        <img src={`${PCDN}/gt-03-mobile.webp`} alt="GoalTrack on a 390 px phone: bottom bar and large touch targets" width="390" height="844" loading="lazy" style="aspect-ratio: 390 / 844; object-fit: cover;" />
      </figure>
    </div>
  </div>
</section>

<style>
  section {
    padding: 6.5rem 0;
    background: linear-gradient(180deg, var(--bg) 0%, var(--bg2) 50%, var(--bg) 100%);
    border-block: 1px solid var(--line);
  }
  h2 {
    font-size: clamp(1.9rem, 4.2vw, 3.2rem);
    max-width: 22ch;
    margin-bottom: 3rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.1rem;
  }
  .wide-shot {
    grid-column: span 2;
  }
  figure {
    border: 1px solid var(--line);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--bg2);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
    margin: 0;
    transition: transform 0.3s, border-color 0.3s;
  }
  figure:hover { transform: translateY(-4px); border-color: rgba(52, 211, 153, 0.35); }
  @media (max-width: 720px) {
    .grid { grid-template-columns: 1fr; }
    .wide-shot { grid-column: span 1; }
  }
</style>
