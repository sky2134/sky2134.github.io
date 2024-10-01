import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useTheme, ThemeProvider } from "./ThemeContext";

function ThemedApp() {
  const { theme, toggleTheme } = useTheme();
  return (
    <StyledThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} />
        </div>
      </>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
