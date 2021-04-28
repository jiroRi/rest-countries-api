const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktopS: "1440px",
  desktopM: "1920px",
  desktopL: "2560px",
};

const styles = {
  colors: {
    gray50: "#FFFFFF",
    gray100: "#FAFAFA",
    gray200: "#858585",
    gray300: "#2B3945",
    gray400: "#202C37",
    gray500: "#111517",
  },

  desktopFontSizes: {
    title: "2.4rem",
    themeSwitcher: "1.5rem",
    cardTitle: "1.8rem",
    cardLabel: "1.4rem",
    filter: "1.5rem",
    regions: "1.5rem",
    fullTitle: "3.2rem",
    fullLabel: "1.6rem",
  },

  mobileFontSizes: {
    title: "1.8rem",
    themeSwitcher: "1.5rem",
    cardTitle: "2.4rem",
    cardLabel: "1.8rem",
    filter: "1.5rem",
    regions: "1.5rem",
    fullTitle: "2.4rem",
    fullLabel: "1.2rem",
  },

  boxShadowLight: {
    header: "0px 6px 12px rgba(133, 133, 133, 0.15);",
    back: "0px 0px 16px rgba(17, 21, 23, 0.25);",
    card: "0px 4px 8px rgba(133, 133, 133, 0.05);",
    search: "0px 0px 12px rgba(133, 133, 133, 0.15);",
    regions: "2px 6px 12px rgba(17, 21, 23, 0.125);",
    borders: "0px 0px 16px rgba(32, 44, 55, 0.15)",
  },

  boxShadowDark: {
    header: "0px 6px 12px rgba(17, 21, 23, 0.15);",
    back: "0px 0px 16px rgba(17, 21, 23, 0.15);",
    card: "0px 4px 8px rgba(17, 21, 23, 0.05);",
    search: "0px 0px 12px rgba(17, 21, 23, 0.15);",
    regions: "2px 6px 12px rgba(17, 21, 23, 0.125);",
    borders: "0px 0px 16px rgba(17, 21, 23, 0.15)",
  },
};

export const lightMode = {
  bg: styles.colors.gray50,
  component: styles.colors.gray100,
  title: styles.colors.gray500,
  themeSwitcher: styles.colors.gray500,
  placeholder: styles.colors.gray200,
  input: styles.colors.gray500,
  cardTitle: styles.colors.gray500,
  cardLabel: styles.colors.gray400,
  cardValue: styles.colors.gray200,
};

export const darkMode = {
  bg: styles.colors.gray300,
  component: styles.colors.gray400,
  title: styles.colors.gray50,
  themeSwitcher: styles.colors.gray50,
  placeholder: styles.colors.gray100,
  input: styles.colors.gray50,
  cardTitle: styles.colors.gray50,
  cardLabel: styles.colors.gray50,
  cardValue: styles.colors.gray100,
};
