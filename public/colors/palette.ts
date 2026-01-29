export const palette = {
  light: "#f1f1f1",
  blueGray_1: "#8497bf",
  blueGray_2: "#526687",
  deepTeal: "#093540",
  dark: "#232323",
} as const;

export type PaletteKey = keyof typeof palette;
