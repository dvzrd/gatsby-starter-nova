import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const defaultContext: ThemeContext = {
  theme: "default",
  setTheme: () => {},
};

export const { Consumer, Provider } = createContext(defaultContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultContext.theme);

  return <Provider value={{ theme, setTheme }}>{children}</Provider>;
};
