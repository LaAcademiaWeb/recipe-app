import {
  HeaderContainer,
  Logo,
  NavLinks,
  NavLinkItem,
  SearchBarContainer,
  SearchInput,
} from "./Header.styles";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="/">Recipe Finder</Logo>

      <NavLinks>
        <NavLinkItem href="/">Home</NavLinkItem>
        <NavLinkItem href="/favorites">Favorites</NavLinkItem>
      </NavLinks>

      <SearchBarContainer>
        <SearchInput type="text" placeholder="Search recipes..." />
      </SearchBarContainer>
      <ThemeToggle />
    </HeaderContainer>
  );
};

export default Header;
