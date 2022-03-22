const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // sans: [...defaultTheme.fontFamily.sans],
        'sans': ['Noto Sans TC', "微軟正黑體", "Microsoft JhengHei", "黑體", 'sans-serif', 'serif'],
        'serif': ['Playfair\\ Display', 'Georgia', 'Times', ' serif']
      },
      fontSize: {
        'tiny': '.938rem'
      },
      colors: {
        'sp-color-light': '#80b884',
        'main-color-light': '#c5c5ca',
        'main-color-middle': '#747475',
        'main-color-dark': '#1f1f39',
        'sub-color-dark': '#968c5e',
        'sub-color-light': '#bbb494',
      },
      borderColor: theme => ({
        'primary': '#c5c5ca',
      }),
      backgroundColor: theme => ({
        'secondary': '#c5c5ca',
      })
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
  ],
}
