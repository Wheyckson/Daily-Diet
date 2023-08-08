import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type CardColorProps = {
  number: number;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_7};
`;

export const Header = styled.View<CardColorProps>`
  display: flex;
  justify-content: center;

  height: 150px;

  background-color: ${({ theme, number }) =>
    number >= 50 || number === 100 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const BackButton = styled.TouchableOpacity`
  display: flex;
`;

export const BackIcon = styled(ArrowLeft).attrs<CardColorProps>(({ theme, number }) => ({
  size: theme.FONT_SIZE.XL,
  color: number >= 50 || number === 100 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  margin-left: 24px;
`;

export const StatisticsContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;

  background-color: ${({ theme }: any) => theme.COLORS.GRAY_7};

  margin-top: -10px;
  border-radius: 20px;
`;

export const Label = styled.Text`
  margin: 33px 0px 23px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Card = styled.View`
  display: flex;
  align-items: center;

  width: 327px;
  height: 80px;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 8px;
  margin-bottom: 12px;
`;

export const DualCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const CardGreen = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 157px;
  height: 107px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;

  padding: 16px;
`;

export const CardRed = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 157px;
  height: 107px;

  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  border-radius: 8px;

  padding: 16px;
`;

export const NumberTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
