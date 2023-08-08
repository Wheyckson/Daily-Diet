import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type HeightInputProps = "50" | "100";

type HeightProps = {
  height: HeightInputProps;
};

export const Container = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const InputText = styled(TextInput)<HeightProps>`
  display: flex;

  min-width: 153.5px;
  max-width: 100%;
  height: ${({ height }) => height}px;

  border-radius: 6px;
  padding: 16px;
  margin-top: 4px;

  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    border: 1px solid ${theme.COLORS.GRAY_5};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
