import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/Home";

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeWrapper>
          <GlobalStyles />
          <Header />
          <HomePage />
        </ThemeWrapper>
      </Provider>
    </>
  );
};

export default App;
