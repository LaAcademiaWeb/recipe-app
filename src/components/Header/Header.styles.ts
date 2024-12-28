import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkItem = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 25px;
  width: 20rem;
  outline: none;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary}50;
  }

  @media (max-width: 768px) {
    width: 15rem;
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textPrimary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.linkHover};
  }
`;
