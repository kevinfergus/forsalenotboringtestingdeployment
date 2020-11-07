module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
  },
  experimental: {
    // uniformColorPalette: true,
    // extendedFontSizeScale: true,
    // currently Sapper dev server chokes on this
    //     // applyComplexClasses: true,
    //
  },
  purge: {
        // @tailwind/typography styles
            mode: 'all',
                content: ['./src/**/*.svelte', './src/**/*.html'],
    
  },
  theme: {
    colors: {
      'white': '#ffffff',
      'gray-lightest': '#faf9fa',
      'gray-lighter': '#e6e6e6',
      'gray-light': '#d2d2d2',
      'gray': '#bfbfbf',
      'gray-dark': '#989798',
      'gray-darker': '#707070',
      'gray-darkest': '#494949',
      'black': '#222122',
      
      'primary-light': '#fbeef8',
      'primary': '#ecbde2',
      'primary-dark': '#6f5a6a',

      'secondary-light': '#ffd8d5',
      'secondary': '#ff5962',
      'secondary-dark': '#793132',
      
      'cta-light': '#f2faee',
      'cta': '#caecbd',
      'cta-dark': '#606f5a',
      
      'info-light': '#e1f5fe',
      'info': '#76d8f9',
      'info-dark': '#3e6674',
      
      'warning-light': '#fff4d5',
      'warning': '#ffd652',
      'warning-dark': '#78652d',
      
      'success-light': '#e0fada',
      'success': '#76e76a',
      'success-dark': '#3d6d37',
      
      'danger-light': '#ffd8d5',
      'danger': '#ff5962',
      'danger-dark': '#793032',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
