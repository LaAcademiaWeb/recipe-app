import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";
import { RootState, AppDispatch } from "../store";
import { DefaultTheme } from "styled-components";

interface UseTheme {
  theme: DefaultTheme;
  switchTheme: (theme: DefaultTheme) => void;
}

const useTheme = (): UseTheme => {
  const dispatch = useDispatch<AppDispatch>();

  const theme = useSelector((state: RootState) => state.theme.selectedTheme);

  const switchTheme = (newTheme: DefaultTheme) => {
    dispatch(setTheme(newTheme));
  };

  return { theme, switchTheme };
};

export default useTheme;
