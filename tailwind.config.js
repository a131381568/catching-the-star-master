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
        'tiny': '.938rem',
        'menu-title': '5.5rem'
      },
      colors: {
        'sp-color-light': '#80b884',
        'main-color-light': '#c5c5ca',
        'main-color-middle': '#747475',
        'main-color-dark': '#1f1f39',
        'main-color-black': '#181824',
        'sub-color-dark': '#968c5e',
        'sub-color-light': '#bbb494',
      },
      backgroundColor: theme => ({
        'secondary': '#c5c5ca',
        'danger': '#80b884',
        'sp-color-light': '#80b884',
        'main-color-light': '#c5c5ca',
        'main-color-middle': '#747475',
        'main-color-dark': '#1f1f39',
        'main-color-black': '#181824',
        'sub-color-dark': '#968c5e',
        'sub-color-light': '#bbb494',
      }),
      borderColor: theme => ({
        'primary': '#c5c5ca',
        'secondary': '#bbb494',
        'danger': '#80b884',
        'sp-color-light': '#80b884',
        'main-color-light': '#c5c5ca',
        'main-color-middle': '#747475',
        'main-color-dark': '#1f1f39',
        'main-color-black': '#181824',
        'sub-color-dark': '#968c5e',
        'sub-color-light': '#bbb494',
      }),
      lineHeight: {
        'menu-title': '5.5rem'
      },
      boxShadow: {
        'btn-default': 'inset 0 0 0 1px #c5c5ca'
      },
      letterSpacing: {
        'wide-menu': '0.5rem',
        'wide-content': '0.15rem',
      },
      borderWidth: {
        'callout-box-boder': '10px'
      },
      opacity: {
        '6': '0.06',
        '12': '0.12',
        '18': '0.18',
      },
      width: {
        '480px': '480px',
        '37/100': '37%',
        '13/100': '13%',
        '9px': '9px',
        '15px': '15px'
      },
      height: {
        '480px': '480px',
        '130px': '130px',
        '15px': '15px',
        '9px': '9px'
      },
      inset: {
        '7px': '7px',
        '5px': '5px',
        '4px': '4px'
      },
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
