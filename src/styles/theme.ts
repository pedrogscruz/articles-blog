export const theme = {
  _brand: 'DefaultTheme' as const,
  colors: {
    neutrals: {
      lightest: '#F0F0F2',
      extraLight: '#E0E2E6',
      light: '#C0C2C8',
      medium: '#9EA0A5',
      dark: '#7F8185',
      extraDark: '#5E5F63',
      darkest: '#202122',
    },
    primary: {
      light: '#0B0E3A',
      medium: '#060725',
      dark: '#020318',
    },
    secondary: {
      light: '#EF4C84',
      medium: '#D31450',
      dark: '#8C1038',
    },
    accent1: {
      light: '#00BFC1',
      medium: '#009598',
      dark: '#006C6E',
    },
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  body: {
    fontFamily: "'Open Sans'",
    fontSize: '0.875rem',
    lineHeight: '130%',
    fontWeight: 400,
  },
  h1: {
    fontSize: '3.5rem',
    lineHeight: '130%',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2.25rem',
    lineHeight: '130%',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.25rem',
    lineHeight: '130%',
    fontWeight: 700,
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: '130%',
    fontWeight: 400,
  }
} as const;

export type Theme = typeof theme; 