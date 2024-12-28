import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import { darkTheme, lightTheme } from "../../styles/theme";
import { ThemeToggleButton, IconWrapper } from "./ThemeToggle.styles";

const ThemeToggle: React.FC = () => {
  const { theme, switchTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme.name === "light" ? darkTheme : lightTheme;
    switchTheme(newTheme);
  };

  return (
    <ThemeToggleButton onClick={handleThemeToggle}>
      <IconWrapper>
        {theme.name === "light" ? <FaMoon /> : <FaSun />}
      </IconWrapper>
    </ThemeToggleButton>
  );
};

export default ThemeToggle;
