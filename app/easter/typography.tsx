import { anton } from '../../utils/fonts'

export const typography = {
  body: {
    fontSize: 26,
    lineHeight: { xs: 1.3, sm: 1.5 },
  },
  sectionHeader: {
    fontWeight: 700,
    fontSize: {
      xs: 46,
      sm: 66,
    },
  },
  subheader: {
    fontWeight: 700,
    fontSize: {
      xs: 30,
      sm: 40,
    },
    lineHeight: 1.3,
  },
  display: {
    fontFamily: anton.style.fontFamily,
    fontWeight: 700,
    fontSize: {
      xs: 85,
      sm: 240,
    },
    letterSpacing: '3px',
  },
}
