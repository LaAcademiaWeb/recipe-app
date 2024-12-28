import type { Preview } from "@storybook/react";
import { globalDecorators } from "./decorators";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: globalDecorators,
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme selection",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "light", icon: "sun", title: "light" },
        { value: "dark", icon: "moon", title: "dark" },
      ],
    },
  },
};

export default preview;
