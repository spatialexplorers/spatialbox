import * as React from "react";
import { styled } from "@spatialbox/theme";

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

export const ButtonContainer = styled.button`
  color: ${(props) => props.theme.color.base.blue};
`;
