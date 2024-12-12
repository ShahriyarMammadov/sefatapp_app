export const typography: Typography = {
  titleLarge400: {
    fontSize: 36,
    fontFamily: 'regular',
    lineHeight: 54,
    letterSpacing: 0.37,
  },
  titleLarge600: {
    fontSize: 32,
    fontFamily: 'semibold',
    lineHeight: 40,
    letterSpacing: 0.37,
  },
  titleLarge700: {
    fontSize: 32,
    fontFamily: 'bold',
    lineHeight: 40,
    letterSpacing: 0.37,
  },
  titleMedium400: {
    fontSize: 24,
    fontFamily: 'regular',
    lineHeight: 32,
    letterSpacing: 0.36,
  },
  titleMedium600: {
    fontSize: 24,
    fontFamily: 'medium',
    lineHeight: 32,
    letterSpacing: 0.36,
  },
  titleMedium700: {
    fontSize: 24,
    fontFamily: 'bold',
    lineHeight: 32,
    letterSpacing: 0.36,
  },
  titleSmall400: {
    fontSize: 20,
    fontFamily: 'regular',
    lineHeight: 28,
    letterSpacing: 0.38,
  },
  titleSmall600: {
    fontSize: 20,
    fontFamily: 'semibold',
    lineHeight: 28,
    letterSpacing: 0.38,
  },
  titleSmall700: {
    fontSize: 20,
    fontFamily: 'bold',
    lineHeight: 28,
    letterSpacing: 0.38,
  },
  titleXSmall400: {
    fontSize: 18,
    fontFamily: 'regular',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  titleXSmall500: {
    fontSize: 18,
    fontFamily: 'medium',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  titleXSmall600: {
    fontSize: 18,
    fontFamily: 'semibold',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  titleXSmall700: {
    fontSize: 18,
    fontFamily: 'bold',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  headline400: {
    fontSize: 16,
    fontFamily: 'regular',
    lineHeight: 24,
    letterSpacing: 0.41,
  },
  headline500: {
    fontSize: 16,
    fontFamily: 'medium',
    lineHeight: 24,
    letterSpacing: 0.41,
  },
  headline600: {
    fontSize: 16,
    fontFamily: 'semibold',
    lineHeight: 24,
    letterSpacing: 0.41,
  },
  headline700: {
    fontSize: 16,
    fontFamily: 'bold',
    lineHeight: 24,
    letterSpacing: 0.41,
  },
  // body400: {
  //   fontSize: 16,
  //   fontFamily: 'regular',
  //   lineHeight: 24,
  //   letterSpacing: 0.38,
  // },
  // body500: {
  //   fontSize: 16,
  //   fontFamily: 'medium',
  //   lineHeight: 24,
  //   letterSpacing: 0.38,
  // },
  // body600: {
  //   fontSize: 16,
  //   fontFamily: 'semibold',
  //   lineHeight: 24,
  //   letterSpacing: 0.38,
  // },
  // body700: {
  //   fontSize: 16,
  //   fontFamily: 'bold',
  //   lineHeight: 24,
  //   letterSpacing: 0.38,
  // },
  subhead400: {
    fontSize: 14,
    fontFamily: 'regular',
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  subhead500: {
    fontSize: 14,
    fontFamily: 'medium',
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  subhead600: {
    fontSize: 14,
    fontFamily: 'semibold',
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  subhead700: {
    fontSize: 14,
    fontFamily: 'bold',
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  caption400: {
    fontSize: 12,
    fontFamily: 'regular',
    lineHeight: 16,
    letterSpacing: 0.65,
  },
  caption500: {
    fontSize: 12,
    fontFamily: 'medium',
    lineHeight: 16,
    letterSpacing: 0.65,
  },
  caption600: {
    fontSize: 12,
    fontFamily: 'semibold',
    lineHeight: 16,
    letterSpacing: 0.65,
  },
  caption700: {
    fontSize: 12,
    fontFamily: 'bold',
    lineHeight: 16,
    letterSpacing: 0.65,
  },
};

type TypoStyle = {
  fontSize: number;
  fontFamily: string;
  lineHeight: number;
  letterSpacing: number;
};

interface Typography {
  titleLarge400: TypoStyle;
  titleLarge600: TypoStyle;
  titleLarge700: TypoStyle;
  titleMedium400: TypoStyle;
  titleMedium600: TypoStyle;
  titleMedium700: TypoStyle;
  titleSmall400: TypoStyle;
  titleSmall600: TypoStyle;
  titleSmall700: TypoStyle;
  titleXSmall400: TypoStyle;
  titleXSmall500: TypoStyle;
  titleXSmall600: TypoStyle;
  titleXSmall700: TypoStyle;
  headline400: TypoStyle;
  headline500: TypoStyle;
  headline600: TypoStyle;
  headline700: TypoStyle;
  // body400: TypoStyle;
  // body500: TypoStyle;
  // body600: TypoStyle;
  // body700: TypoStyle;
  subhead400: TypoStyle;
  subhead500: TypoStyle;
  subhead600: TypoStyle;
  subhead700: TypoStyle;
  caption400: TypoStyle;
  caption500: TypoStyle;
  caption600: TypoStyle;
  caption700: TypoStyle;
}
