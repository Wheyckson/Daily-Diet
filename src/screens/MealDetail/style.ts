import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

// export type ColorIconSnack = "Sim" | "Não" | string;

type Props = {
  color: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const DetailContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  margin-top: -10px;

  padding: 8px 24px 40px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-top: 40px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-top: 8px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-top: 24px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-top: 8px;
`;

export const Tag = styled.View`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 144px;
  height: 34px;
  border-radius: 1000px;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const TagString = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const TagColor = styled.View<Props>`
  display: flex;
  margin-top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 8px;

  background-color: ${({ theme, color }) => (color === true ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)};
`;

export const ButtonGroup = styled.View`
  display: flex;
  padding: 24px;
  gap: 8px;
`;

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: "center";
  align-items: "center";
`;

//

export const ModalView = styled.View`
  display: flex;
  width: 327px;
  padding: 40px 21px 24px 24px;
  flex-direction: column;
`;

export const Header = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  text-align: center;
`;

export const ModalButtonGroup = styled.View`
  display: flex;
  padding: 24px;
  gap: 8px;
`;

export const CancelButton = styled(TouchableOpacity)`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const CancelText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const ConfirmButton = styled(TouchableOpacity)`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
  background: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ConfirmText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
