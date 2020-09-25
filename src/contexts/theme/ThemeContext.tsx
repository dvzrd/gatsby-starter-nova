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

const defaultState: ThemeContext = {
  theme: "default",
  setTheme: () => {},
};

export const { Consumer, Provider } = createContext(defaultState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultState.theme);

  return <Provider value={{ theme, setTheme }}>{children}</Provider>;
};
