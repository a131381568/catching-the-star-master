const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')
const bgPath = process.env.NODE_ENV === 'production' ? 'bg' : '/assets/bg'

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
        'menu-title': '5.5rem',
        '20vw': '20vw',
        'middle': '0.9375rem'
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'astrolabe': 'url("' + bgPath + '/home.png")',
        'menu-about': 'url("' + bgPath + '/menu-bg-01.jpg")',
        'menu-science': 'url("' + bgPath + '/menu-bg-02.jpg")',
        'menu-story': 'url("' + bgPath + '/menu-bg-03.jpg")',
        'menu-facilities': 'url("' + bgPath + '/menu-bg-04.jpg")',
        'menu-stargazing': 'url("' + bgPath + '/menu-bg-05.jpg")',
        'menu-search': 'url("' + bgPath + '/menu-bg-06.jpg")',
        'about-writing': 'url("' + bgPath + '/bg-about-white.jpg")',
        'story-featured': 'url("' + bgPath + '/story-bg-02.jpg")',
        'admin-featured': 'url("' + bgPath + '/admin-bg.jpg")'
      },
      backgroundSize: {
        'auto-500': 'auto 500px'
      },
      lineHeight: {
        'menu-title': '5.5rem'
      },
      boxShadow: {
        'btn-default': 'inset 0 0 0 1px #c5c5ca',
        '30-box': '0px 5px 30px 0px rgb(0 0 0 / 30%)'
      },
      spacing: {
        '0-8em': '0.8em',
        '0-35em': '0.35em'
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
      maxWidth: {
        '1/2': '50%',
        '375px': '375px'
      },
      width: {
        '480px': '480px',
        '380px': '380px',
        '200px': '200px',
        '37/100': '37%',
        '30/100': '30%',
        '15/100': '15%',
        '13/100': '13%',
        '2px': '2px',
        '9px': '9px',
        '15px': '15px',
        '28px': '28px',
        '29px': '29px',
        '64px': '64px',
        '77px': '77px',
        '130px': '130px',
        '1-8em': '1.8em'
      },
      height: {
        '480px': '480px',
        '380px': '380px',
        '200px': '200px',
        '130px': '130px',
        '15px': '15px',
        '9px': '9px',
        '80vh': '80vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '0-2em': '0.2em'
      },
      inset: {
        '15px': '15px',
        '7px': '7px',
        '5px': '5px',
        '4px': '4px',
        '1/2-7px': 'calc(50% - 7px)'
      },
      minHeight: {
        '100px': '100px'
      },
      zIndex: {
        '10001': '10001',
        '10000': '10000',
        '9999': '9999',
        '999': '999',
        '401': '401',
        '1': '1'
      },
      padding: {
        '320px': '320px',
        '2px': '2px'
      },
      margin: {
        '0-4em': '0.4em'
      },
      borderRadius: {
        '2em': '2em'
      },
      rotate: {
        '225': '225deg'
      }
    },
    // 自定義 RWD 斷點
    /**
     * @param { sm } - min-width: 640px
     * @param { md } - min-width: 768px
     * @param { lg } - min-width: 1024px
     * @param { xl } - min-width: 1280px
     * @param { 2xl } - min-width: 1536px
     */
    screens: {
      // default
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // add
      'mini-mobile': { 'max': '375px' },
      'mobile': { 'max': '767px' },
      'h-table': '768px',
      'w-table': '992px',
      'laptop': '1280px',
      'middle-pc': '1441px',
      'large-pc': '1600px',
      'pro-pc': '1800px',
      'screens-h-900': { 'raw': '(max-height: 900px)' },
      'screens-h-500': { 'raw': '(max-height: 500px)' },
    }
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
