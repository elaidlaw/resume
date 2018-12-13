/** @flow */

const palette = {
  portraitBackground: '#bdc1c2',
  accent1: '#1f3749',
  accent2: '#a56413',
  text: '#333',
  headerText: '#787A7B',
}

export default {
  palette,
  fonts: {
    header: {
      bold: { fontSize: 24, fontFamily: 'League Gothic',
        color: palette.headerText },
    },
    body: {
      regular: { fontSize: 12, fontFamily: 'Open Sans',
        color: palette.accent1 },
      bold: { fontSize: 12, fontFamily: 'Open Sans Bold',
        color: palette.accent1 },
    },
    detail: {
      regular: { fontSize: 10, fontFamily: 'Open Sans',
        color: palette.text },
      bold: { fontSize: 10, fontFamily: 'Open Sans Bold',
        color: palette.accent1 },
    },
  },
  spacing: {
    unit: 5,
  },
};
