import React, {
  FC,
  MouseEvent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

import { Button, ButtonProps } from "components";

type Theme = "dark" | "light";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (event: MouseEvent) => void;
}

// check if color scheme preference for user's OS is configured for dark mode.
const prefersDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
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

export const ThemeSwitch: FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={className}
      color="transparent"
      is="icon"
      {...(rest as ButtonProps)}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <FaLightbulb className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7" />
      ) : (
        <FaRegLightbulb className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7" />
      )}
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
