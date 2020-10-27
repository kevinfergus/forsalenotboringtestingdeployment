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
        // needs to be set if we want to purge all unused
    //     // @tailwind/typography styles
    //         mode: 'all',
    //             content: ['./src/**/*.svelte', './src/**/*.html'],
    //
  },
  theme: {
    colors: {
            primary: '#ecbde2',
            secondary: '#de4545',
            white: '#fff',
            black: '#000',
            red: '#de3618',

    },
    container: {
            center: true,

    },
        extend: {},

  },
    variants: {},
    plugins: [require('@tailwindcss/typography')],

};
