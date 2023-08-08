import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type WidthButtonProps = "auto" | "200";
export type ColorTypeProps = "Primary" | "Secundary";

type WidthProps = {
  width: WidthButtonProps;
};

type ColorProps = {
  colorType: ColorTypeProps;
};

export const Container = styled(TouchableOpacity)<WidthProps & ColorProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => (width !== "200" ? "100%" : "200px")};
  height: 50px;

  gap: 12px;

  background-color: ${({ colorType, theme }) => (colorType === "Primary" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE)};
  border: ${({ colorType, theme }) => (colorType === "Primary" ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_2)};

  border-radius: 6px;
`;

export const Icon = styled(MaterialIcons)<ColorProps>`
  ${({ colorType, theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => (colorType === "Primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1)};
  `}
`;

export const Title = styled.Text<ColorProps>`
  ${({ colorType, theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => (colorType === "Primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1)};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
