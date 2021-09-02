import * as React from "react";
import { styled } from "../theme";
import { DWTheme } from "../theme/themes/base";

export type ButtonVariant = "cta" | "primary" | "secondary" | "negative";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "xs" | "sm" | "md" | "lg";
  isLoading?: boolean;
  isQuiet?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", isLoading, isQuiet, leftIcon, rightIcon, children, ...buttonProps }, ref) => {
    return (
      <ButtonContainer
        className={`${variant} ${size} ${isQuiet && "quiet"}`}
        ref={ref}
        {...buttonProps}
        disabled={buttonProps.disabled || isLoading}
      >
        {leftIcon && <span className="left">{leftIcon}</span>}
        {children}

        {rightIcon && <span className="right">{rightIcon}</span>}
      </ButtonContainer>
    );
  }
);

function sizes(prop: DWTheme["button"]["sizes"], size: keyof DWTheme["button"]["sizes"]) {
  return `
    border-radius: ${prop[size].radius};
    font-size: ${prop[size].font.size};
    height: ${prop[size].height};
    padding: 0 ${prop[size].padding};
  `;
}

function variants(prop: DWTheme["button"]["variants"], variant: keyof DWTheme["button"]["variants"]) {
  let v = prop[variant];
  return `
    background-color: ${v.background.default};
    color: ${v.color};

    &:hover {
      background-color: ${v.background.hover};
    }

    &.quiet {
      color: #333;
      background-color: transparent;

      &:hover {
        color: ${v.color};
        background-color: ${v.background.hover};
      }
    }

  `;
}

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  span {
    display: inline-flex;
    align-self: center;
    flex-shrink: 0;

    padding-right: 4px;
    &.right {
      padding-left: 4px;
      padding-right: 0;
    }
  }

  ${(props) => sizes(props.theme.button.sizes, "md")}

  &.xs {
    ${(props) => sizes(props.theme.button.sizes, "xs")}
  }

  &.sm {
    ${(props) => sizes(props.theme.button.sizes, "sm")}
  }

  &.lg {
    ${(props) => sizes(props.theme.button.sizes, "lg")}
  }

  &.cta {
    ${(props) => variants(props.theme.button.variants, "cta")}
  }

  &.primary {
    ${(props) => variants(props.theme.button.variants, "primary")}
  }

  &.secondary {
    ${(props) => variants(props.theme.button.variants, "secondary")}
  }

  &.negative {
    ${(props) => variants(props.theme.button.variants, "negative")}
  }
`;
