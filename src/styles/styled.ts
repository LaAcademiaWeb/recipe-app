import styled from "styled-components";

export const HomePageContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  transition: transform 0.2s ease;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export const RecipeName = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0.5rem 0;
`;

export const Label = styled.span<{ type: string }>`
  display: inline-block;
  background: ${({ theme }) => theme.background};
  color: ${({ type, theme }) =>
    type === "difficulty" ? theme.primary : theme.secondary};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  margin-right: 0.5rem;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .star {
    color: ${({ theme }) => theme.primary};
    font-size: 1.2rem;
  }

  .reviews {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.cardBackground};
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.cardBackground};
  }
`;
