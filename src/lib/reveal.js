// Svelte action: add .in when element scrolls into view
export function reveal(node, opts = {}) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          node.style.transitionDelay = (opts.delay || 0) + 'ms'
          node.classList.add('in')
          io.unobserve(node)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )
  io.observe(node)
  return { destroy: () => io.disconnect() }
}
