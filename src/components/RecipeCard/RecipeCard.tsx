// RecipeCard.tsx
import React from "react";
import {
  Card,
  RecipeImage,
  RecipeName,
  Label,
  RatingWrapper,
  FavoriteButton,
} from "../../styles/styled";
import { FaHeart, FaStar } from "react-icons/fa";

interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
  rating: number;
  reviewCount: number;
}

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <Card>
      <FavoriteButton
        className={isFavorite ? "active" : ""}
        onClick={() => onToggleFavorite(recipe.id)}
      >
        <FaHeart />
      </FavoriteButton>

      <RecipeImage src={recipe.image} alt={recipe.name} />
      <RecipeName>{recipe.name}</RecipeName>

      <div>
        <Label type="cuisine">{recipe.cuisine}</Label>
        <Label type="difficulty">{recipe.difficulty}</Label>
      </div>

      <RatingWrapper>
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            key={i}
            className="star"
            style={{
              color: i < Math.floor(recipe.rating) ? "#FBC02D" : "#E0E0E0",
            }}
          />
        ))}
        <span className="reviews">({recipe.reviewCount} Reviews)</span>
      </RatingWrapper>
    </Card>
  );
};
