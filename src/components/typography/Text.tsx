import styled, { DefaultTheme } from "styled-components/native";

type TextVariantElement =
  | "body"
  | "label"
  | "caption"
  | "error"
  | "hint"
  | "header";

type TextVariant = (theme: DefaultTheme) => string;

type TextProps = {
  variant?: TextVariantElement;
};

export const Text = styled.Text<TextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => getVariantStyle(theme, variant)}
`;

const defaultTextStyles = (theme: DefaultTheme) => `
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.body};
`;

const getVariantStyle = (
  theme: DefaultTheme,
  variant?: TextVariantElement
): string => (variant ? variants[variant](theme) : "");

const label: TextVariant = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const body: TextVariant = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const caption: TextVariant = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const error: TextVariant = (theme) => `
  color: ${theme.colors.text.error};
`;

const hint: TextVariant = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const header: TextVariant = (theme) => `
  font-size: ${theme.fontSizes.title};
  font-family: ${theme.fonts.heading};
`;

const variants: Record<TextVariantElement, TextVariant> = {
  body,
  label,
  caption,
  error,
  hint,
  header,
};
