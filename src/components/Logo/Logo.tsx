import {
  useThemeContext,
  useToggleThemeContext,
} from "../../contexts/ThemeContext";

export const Logo = () => {
  const theme = useThemeContext();
  const toggleTheme = useToggleThemeContext();
  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      {theme}
    </>
  );
};
