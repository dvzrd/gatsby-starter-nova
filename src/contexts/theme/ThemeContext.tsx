import React, {
  MouseEvent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "theme-dark" | "theme-light";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (event: MouseEvent) => void;
}

// get dark mode information from OS
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeContext = createContext<ThemeContextProps>({
  theme: "theme-dark",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("theme-light");

  useEffect(() => {
    // get theme value from localStorage
    const storedTheme: Theme = localStorage.getItem("theme") as Theme;
    if (storedTheme !== null) {
      setTheme(storedTheme);
    } else if (supportsDarkMode()) {
      setTheme("theme-dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = theme === "theme-dark";
    localStorage.setItem("theme", isDark ? "theme-light" : "theme-dark");
    setTheme(isDark ? "theme-light" : "theme-dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeSwitch: React.FC<{}> = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <button type="button" onClick={toggleTheme}>
      Switch Theme
    </button>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useThemeContext must be called inside ThemeProvider.");
  }

  return context;
};
