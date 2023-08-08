import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type ColorIconSnack = boolean;

type Props = {
  color: ColorIconSnack;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;

export const ConteinerButton = styled.View`
  margin-bottom: 32px;
`;

export const StringType = styled.Text`
  margin: 40px 0px 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const GroupCard = styled(TouchableOpacity)`
  display: flex;
  width: 360px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #dddedf;
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const ItemCard = styled.View`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: row;
`;

export const HeaderCard = styled.Text`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 16px 0px 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;

export const HourCard = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Separator = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_4};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SnackCard = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const ColorSnack = styled.View<Props>`
  display: flex;
  width: 14px;
  height: 14px;
  border-radius: 8px;

  background-color: ${({ theme, color }) => (color === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID)};
`;
