/** @flow */

const palette = {
  portraitBackground: '#bdc1c2',
  accent1: '#1f3749',
  accent2: '#a56413',
  text: '#333',
  headerText: '#101060',
}

export default {
  palette,
  fonts: {
    header: {
      bold: { fontSize: 18, fontFamily: 'Raleway Semibold',
        color: palette.headerText },
    },
    h2: {
      bold: { fontSize: 14, fontFamily: 'Open Sans Bold',
        color: palette.headerText },
    },
    body: {
      regular: { fontSize: 11, fontFamily: 'Open Sans',
        color: palette.accent1 },
      bold: { fontSize: 11, fontFamily: 'Open Sans Bold',
        color: palette.accent1 },
    },
    detail: {
      regular: { fontSize: 9, fontFamily: 'Open Sans',
        color: palette.text },
      bold: { fontSize: 9, fontFamily: 'Open Sans Bold',
        color: palette.accent1 },
    },
  },
  spacing: {
    unit: 4,
  },
};
