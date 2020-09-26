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
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className="focus:outline-none" type="button" onClick={toggleTheme}>
      {theme === "theme-dark" ? (
        <svg
          className="fill-current w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="fill-current w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
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
