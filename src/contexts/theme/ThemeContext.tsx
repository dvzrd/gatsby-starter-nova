import React, {
  FC,
  MouseEvent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Button, ButtonProps, Icon } from "components";

type Theme = "dark" | "light";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (event: MouseEvent) => void;
}

// check if color scheme preference for user's OS is configured for dark mode.
const prefersDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // get theme value from localStorage
    const storedTheme: Theme = localStorage.getItem("theme") as Theme;
    if (storedTheme !== null) {
      setTheme(storedTheme);
    } else if (prefersDarkMode()) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = theme === "dark";
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeSwitch: FC<ButtonProps> = ({ children, ...rest }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      color="transparent"
      pattern="icon"
      {...(rest as ButtonProps)}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Icon name="sun" /> : <Icon name="moon" />}
      {children}
    </Button>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be called inside ThemeProvider.");
  }

  return context;
};
