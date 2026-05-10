import { animate, inView, stagger } from 'motion'

/* ─── Config ─────────────────────────────────────────────── */
const EASE   = [0.22, 1, 0.36, 1]
// Fire as soon as any pixel enters the viewport (no negative margin)
const MARGIN = '0px'

/* ─── Scroll reveals ─────────────────────────────────────── */
inView('[data-fm="fade-up"]', (e) => {
  animate(e.target, { opacity: [0, 1], y: [28, 0] }, { duration: 0.7, easing: EASE })
}, { margin: MARGIN })

inView('[data-fm="fade-in"]', (e) => {
  animate(e.target, { opacity: [0, 1] }, { duration: 0.6, easing: 'ease-out' })
}, { margin: MARGIN })

inView('[data-fm="fade-left"]', (e) => {
  animate(e.target, { opacity: [0, 1], x: [-28, 0] }, { duration: 0.7, easing: EASE })
}, { margin: MARGIN })

inView('[data-fm="fade-right"]', (e) => {
  animate(e.target, { opacity: [0, 1], x: [28, 0] }, { duration: 0.7, easing: EASE })
}, { margin: MARGIN })

inView('[data-fm="scale-in"]', (e) => {
  animate(e.target, { opacity: [0, 1], scale: [0.96, 1] }, { duration: 0.6, easing: EASE })
}, { margin: MARGIN })

inView('[data-fm="stagger"]', (e) => {
  const children = e.target.querySelectorAll('[data-fm-child]')
  if (!children.length) return
  animate(children, { opacity: [0, 1], y: [20, 0] }, { duration: 0.55, delay: stagger(0.1), easing: EASE })
}, { margin: MARGIN })

/* ─── Sticky nav ─────────────────────────────────────────── */
const nav = document.getElementById('z-nav')
if (nav) {
  const onScroll = () => nav.classList.toggle('nav-scrolled', window.scrollY > 60)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  const menuBtn = document.getElementById('z-menu-btn')
  const mobileMenu = document.getElementById('z-mobile-menu')
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden')
      menuBtn.setAttribute('aria-expanded', String(!isOpen))
    })
  }
}

/* ─── Hero subtle parallax ───────────────────────────────── */
const heroWrap = document.getElementById('z-hero-wrap')
if (heroWrap) {
  heroWrap.classList.add('hero-loaded')
  window.addEventListener('scroll', () => {
    const y = window.scrollY
    if (y < window.innerHeight) {
      heroWrap.style.setProperty('--hero-offset', `${y * 0.3}px`)
    }
  }, { passive: true })
}

/* ─── Ritual tabs ─────────────────────────────────────────── */
const tabBtns = document.querySelectorAll('.ritual-tab')
if (tabBtns.length) {
  const activate = (btn) => {
    const panelId = btn.getAttribute('aria-controls')
    tabBtns.forEach(b => {
      b.classList.toggle('active', b === btn)
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false')
    })
    document.querySelectorAll('.ritual-panel').forEach(p => {
      const isActive = p.id === panelId
      p.classList.toggle('active', isActive)
      if (isActive) animate(p, { opacity: [0, 1], y: [12, 0] }, { duration: 0.4, easing: EASE })
    })
  }
  tabBtns.forEach(btn => btn.addEventListener('click', () => activate(btn)))
}

/* ─── FAQ accordion ──────────────────────────────────────── */
document.querySelectorAll('.faq-item').forEach((item) => {
  const trigger = item.querySelector('.faq-trigger')
  if (!trigger) return
  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('open')
    document.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open')
      el.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false')
    })
    if (!isOpen) {
      item.classList.add('open')
      trigger.setAttribute('aria-expanded', 'true')
    }
  })
})

/* ─── Product image hover ────────────────────────────────── */
document.querySelectorAll('.z-product-card').forEach(card => {
  card.addEventListener('mouseenter', () => animate(card, { y: -4 }, { duration: 0.3, easing: EASE }))
  card.addEventListener('mouseleave', () => animate(card, { y: 0 },  { duration: 0.25, easing: EASE }))
})

/* ─── Inline form success ────────────────────────────────── */
document.querySelectorAll('.z-newsletter-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    const success = form.querySelector('.form-success')
    if (success && form.querySelector('[name="contact[email]"]')?.value) {
      setTimeout(() => {
        if (success) animate(success, { opacity: [0, 1], y: [-8, 0] }, { duration: 0.4, easing: EASE })
      }, 200)
    }
  })
})
