module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'body': ['Montserrat']
    },
    screens: {
      'desktop': {
        // <1600px
        max: '100em',
      },

      'laptop': {
        // <1300px
        max: '81.25em  ',
      },
      'laptop-mini': {
        // <1100px
        max: '68.75em  ',
      },
      'tablet': {
        // <900px
        max: '56.25em',
      },
      'tablet-mini': {
        // <576px
        max: '36em',
      },
      'phone': {
        // <576px
        max: '27em',
      },
      'phone-mini': {
        // <576px
        max: '23em',
      }


    },
    extend: {
      fontSize: {
        '7sm': '4.5rem'
      },
      colors: {
        'primary': '#E7015E',
        'secondary': '#32009D'

      },
      width: {
        '420': '26.25rem',
        '480': '30rem'
      },
      height: {
        '480': '30rem'
      }

    },
  },
  variants: {},


}
