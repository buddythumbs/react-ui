export const lightTheme = {
    "--bg": "#dadce1",
    "--bg-darker": '#b1b2b5',
    "--bg-lighter": '#e8ebf2',
    "--bg-accent": "#eff2f7",
    "--text-color": "#242536",
    "--border": "1px solid #eff2f7"
}

export const darkTheme = {
    "--bg": "#242536",
    "--bg-darker": '#0f0f16',
    "--bg-lighter": '#484a6d',
    "--bg-accent": "#484a4d",
    "--text-color": "#22d1ee",
    "--border": "1px solid #484a4d" 
}

export const applyTheme = nextTheme => {
    const theme = nextTheme === "dark" ? darkTheme : lightTheme;
    Object.keys(theme).forEach(key => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  };
