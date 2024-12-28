import type { Meta, StoryObj } from "@storybook/react";
import { RecipeCard } from "../components/RecipeCard/RecipeCard";

const meta = {
  title: "Components/RecipeCard",
  component: RecipeCard,
  parameters: {
    layout: "centered",
  },
  args: {
    recipe: {
      id: 1,
      name: "Classic Margherita Pizza",
      difficulty: "Easy",
      cuisine: "Italian",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 98,
    },
    isFavorite: true,
    onToggleFavorite: () => {},
  },
} satisfies Meta<typeof RecipeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
