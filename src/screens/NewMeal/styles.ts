import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const FormWrapper = styled.View`
  flex: 1;
  padding: 8px 24px 40px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  margin-top: -10px;
`;

export const DataWrapper = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}

  margin: 24px 0px -12px;
`;
