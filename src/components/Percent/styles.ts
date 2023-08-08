import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CardColorProps = {
  number: number;
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
`;

export const Percents = styled(TouchableOpacity)<CardColorProps>`
  display: flex;
  width: 100%;
  height: 102px;
  justify-content: center;
  background-color: ${({ theme, number }) =>
    number >= 50 || number === 100 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const RedirectIcon = styled(ArrowUpRight).attrs<CardColorProps>(({ theme, number }) => ({
  size: theme.FONT_SIZE.XL,
  color: number >= 50 || number === 100 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  margin: 0px 90% -12px;
`;
