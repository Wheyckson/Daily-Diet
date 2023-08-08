import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export type ColorIconProps = "Sim" | "Não" | string;

type ColorProps = {
  textButton: ColorIconProps;
};

export const Container = styled.View`
  margin-top: 24px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}/* align-items: center; */
`;

export const Button = styled(TouchableOpacity)<FilterStyleProps & ColorProps>`
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 175px;
  border-radius: 6px;

  background-color: ${({ theme, isActive, textButton }) =>
    isActive && textButton === "Sim"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.GRAY_6 && isActive && textButton === "Não"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};

  border: 1px solid;
  border-color: ${({ theme, isActive, textButton }) =>
    isActive && textButton === "Sim"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.GRAY_6 && isActive && textButton === "Não"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_6};
`;

export const ColorType = styled.View<ColorProps>`
  display: flex;
  width: 8px;
  height: 8px;
  border-radius: 8px;

  background-color: ${({ theme, textButton }) =>
    textButton === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
