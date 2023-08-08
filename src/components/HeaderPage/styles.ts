import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type StringProps = "GRAY_5" | "GREEN_LIGHT" | "RED_LIGHT";

export type StyleBackgroundProps = {
  inDiet: StringProps;
};

export const Container = styled.View<StyleBackgroundProps>`
  height: 104px;
  background-color: ${({ theme, inDiet }) =>
    inDiet === "GRAY_5"
      ? theme.COLORS.GRAY_5
      : "" || inDiet === "GREEN_LIGHT"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  /* width: 50%; */
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  display: flex;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.GRAY_2,
}))`
  margin-left: -120px;
`;

export const HeaderText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
