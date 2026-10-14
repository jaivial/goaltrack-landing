<script>
  import { t } from '../lib/i18n.svelte.js'
  import { reveal } from '../lib/reveal.js'
  const CDN = 'https://villacarmenmedia.b-cdn.net/goaltrack-landing'
  const tr = $derived(t())
</script>

<section id="mobile">
  <div class="container split">
    <div class="copy">
      <p class="kicker reveal" use:reveal>{tr.mobile.kicker}</p>
      <h2 class="reveal" use:reveal={{ delay: 80 }}>{tr.mobile.title}</h2>
      <p class="sub reveal" use:reveal={{ delay: 160 }}>{tr.mobile.sub}</p>
    </div>
    <div class="phones reveal" use:reveal={{ delay: 150 }}>
      <div class="phone">
        <img src={`${CDN}/mobile_today.png`} alt="GoalTrack today screen on mobile" width="390" height="844" style="aspect-ratio: 390 / 844; object-fit: cover;" loading="lazy" />
      </div>
      <div class="phone back">
        <img src={`${CDN}/mobile_goal_detail.png`} alt="GoalTrack goal mosaic on mobile" width="390" height="844" style="aspect-ratio: 390 / 844; object-fit: cover;" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 6.5rem 0;
    background: linear-gradient(180deg, var(--bg) 0%, var(--bg2) 50%, var(--bg) 100%);
    border-block: 1px solid var(--line);
    overflow: hidden;
  }
  .split {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 3rem;
    align-items: center;
  }
  h2 {
    font-size: clamp(1.9rem, 4.2vw, 3.2rem);
    max-width: 14ch;
  }
  .sub {
    margin-top: 1.3rem;
    color: var(--muted);
    max-width: 44ch;
  }
  .phones {
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 560px;
  }
  .phone {
    width: min(265px, 62vw);
    border-radius: 34px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.65);
    background: var(--card);
    z-index: 1;
  }
  .phone.back {
    position: absolute;
    right: 0;
    top: 8%;
    transform: rotate(6deg) scale(0.86);
    opacity: 0.85;
    z-index: 0;
  }
  @media (max-width: 860px) {
    .split { grid-template-columns: 1fr; }
    .phones { min-height: 0; margin-top: 1rem; }
    .phone.back { right: auto; left: 55%; }
  }
</style>
