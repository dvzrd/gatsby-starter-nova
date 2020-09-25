import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContext {
  theme: string;
  setTheme: (value: string) => void;
}

const defaultState: ThemeContext = {
  theme: "dark",
  setTheme: () => {},
};

// get light mode information from OS
const supportsLightMode = () =>
  window.matchMedia("(prefers-color-scheme: light)").matches === true;

const ThemeContext = createContext(defaultState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultState.theme);

  useEffect(() => {
    // get theme value from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setTheme(JSON.parse(storedTheme));
    } else if (supportsLightMode()) {
      setTheme("light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// TODO: update theme switch to toggle multiple theme enum values
export const ThemeSwitch: React.FC<{}> = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Switch Theme
    </button>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
