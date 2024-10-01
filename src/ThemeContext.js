import React, { createContext, useContext, useEffect, useState } from "react";
import { allThemes } from "./theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(allThemes.oceanDreamTheme);
  const keys = Object.keys(allThemes);

  useEffect(() => {
    if (localStorage.getItem("currentTheme")) {
      setTheme(JSON.parse(localStorage.getItem("currentTheme")));
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = allThemes[keys[[Math.floor(Math.random() * keys.length)]]];
    localStorage.setItem("currentTheme", JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
