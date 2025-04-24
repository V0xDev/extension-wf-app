/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

const SPACING_RANGE = [1, 128]

const createRemSpacings = (range = SPACING_RANGE) => {
  const [start, end] = range
  const spacings = {}

  for (let i = start; i <= end; i++) {
    spacings[`${i}`] = `${(i / 10).toFixed(1)}rem`
  }

  return spacings
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: createRemSpacings(),
    },
    borderRadius: {
      ...createRemSpacings(),
      full: '9999px',
    },
    spacing: {
      0: '0px',
      ...createRemSpacings(),
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const typographyWithOnlySizes = {}
      for (let i = 8; i <= 120; i += 2) {
        typographyWithOnlySizes[`.text-${i}`] = {
          fontSize: `${(i / 10).toFixed(1)}rem`,
        }
      }

      addUtilities(typographyWithOnlySizes)
    }),
  ],
}
