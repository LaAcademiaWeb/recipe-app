import React from "react";
import { StoryFn, StoryContext } from "@storybook/react";
import GlobalStyles from "../src/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/styles/theme";

export const withTheme = (Story: StoryFn, ctx: StoryContext) => {
  const { theme } = ctx.globals;
  const selectedTheme = theme === lightTheme.name ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
