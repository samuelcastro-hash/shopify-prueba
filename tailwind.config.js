/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.{liquid,json}',
    './src/**/*.{js,css}',
  ],
  theme: {
    extend: {
      colors: {
        z: {
          cream:   '#FAF8F5',
          charcoal:'#1C1C1A',
          sage:    '#7A9E7E',
          terra:   '#C8856A',
          beige:   '#EDE8E0',
          sand:    '#D9D3CB',
          muted:   '#6B6B68',
          'sage-dark': '#5A7E60',
          'cream-dark':'#F0EDE8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem,6vw,5rem)',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem,4.5vw,4rem)',{ lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem,3.5vw,3rem)',  { lineHeight: '1.1' }],
      },
      borderRadius: {
        btn: '2px',
        card:'6px',
      },
      maxWidth: {
        content: '1320px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'parallax':   'none',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
