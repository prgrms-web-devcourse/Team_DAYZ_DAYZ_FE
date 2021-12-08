const theme = {
  color: {
    primary: '#aaa',
  },
  height: {
    bottomHeight: '65px',
  },
} as const;

export default theme;

export type ITheme = typeof theme;
