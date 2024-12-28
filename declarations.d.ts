import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    background: string;
    cardBackground: string;
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
    placeholder: string;
    linkHover: string;
  }
}
