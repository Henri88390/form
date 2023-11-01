import { ReactNode, createContext, useContext, useState } from "react";
type Theme = "dark" | "light";
export const ThemeContext = createContext<Theme>("dark");

export const ThemeUpdateContext = createContext<() => void>(() => null);

type ThemeContextProviderProps = {
  children: ReactNode;
};
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useToggleThemeContext = () => {
  return useContext(ThemeUpdateContext);
};
