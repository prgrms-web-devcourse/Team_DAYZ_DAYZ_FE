const theme = {
  color: {
    primary: '#aaa',
  },
} as const;

export default theme;

export type ITheme = typeof theme;
