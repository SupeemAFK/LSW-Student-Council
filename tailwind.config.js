module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        left: 'left'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(208px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(208px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(208px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(208px, 1fr))',
      },
    },
    fontFamily: {
      sans: ['Prompt', 'sans-serif']
    }
  },
  plugins: [],
}