import React, {
  FC,
  MouseEvent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import classNames from "classnames";

import { Icon, Pattern, PatternProps } from "components";

type Theme = "theme-dark" | "theme-light";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (event: MouseEvent) => void;
}

// check if color scheme preference for user's OS is configured for dark mode.
const prefersDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeContext = createContext<ThemeContextProps>({
  theme: "theme-dark",
  toggleTheme: () => {},
});

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("theme-light");

  useEffect(() => {
    // get theme value from localStorage
    const storedTheme: Theme = localStorage.getItem("theme") as Theme;
    if (storedTheme !== null) {
      setTheme(storedTheme);
    } else if (prefersDarkMode()) {
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

export const ThemeSwitch: FC<PatternProps> = ({
  children,
  className,
  ...rest
}) => {
  const { theme, toggleTheme } = useTheme();

  // TODO:
  // - Replace pattern with higher level button component.
  // - Add props for icons.
  return (
    <Pattern
      as="button"
      is="button"
      {...rest}
      className={classNames("focus:outline-none", className)}
      type="button"
      onClick={toggleTheme}
    >
      {theme === "theme-dark" ? <Icon name="sun" /> : <Icon name="moon" />}
      {children}
    </Pattern>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be called inside ThemeProvider.");
  }

  return context;
};
