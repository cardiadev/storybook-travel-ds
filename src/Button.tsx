import React, { FC, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryGray"
  | "tertiary"
  | "tertiaryGray";

type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";
type ButtonState = "default" | "hover" | "focus" | "disabled";

const ButtonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: "btn-primary",
    hover: "btn-primary-hover",
    focus: "btn-primary-focus shadow-grayDark",
    disabled: "btn-primary-disabled",
  },
  secondary: {
    default: "btn-secondary",
    hover: "btn-secondary-hover",
    focus: "btn-secondary-focus shadow-grayDark",
    disabled: "btn-secondary-disabled",
  },
  secondaryGray: {
    default: "btn-secondaryGray",
    hover: "btn-secondaryGray-hover",
    focus: "btn-secondaryGray-focus",
    disabled: "btn-secondaryGray-disabled",
  },
  tertiary: {
    default: "btn-tertiary",
    hover: "btn-tertiary-hover",
    focus: "",
    disabled: "btn-tertiary-disabled",
  },
  tertiaryGray: {
    default: "btn-tertiaryGray",
    hover: "btn-tertiaryGray-hover",
    focus: "",
    disabled: "btn-tertiaryGray-disabled",
  },
};

const ButtonSizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
  "2xl": "btn-2xl",
};

const ButtonIconSizeClasses: Record<ButtonSize, string> = {
  sm: "btn-icon-sm",
  md: "btn-icon-md",
  lg: "btn-icon-lg",
  xl: "btn-icon-xl",
  "2xl": "btn-icon-2xl",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label. Omit it when using `IconOnly`. */
  children?: string | React.ReactElement;
  /** Extra Tailwind classes merged into the button. */
  className?: string;
  /** Visual hierarchy: `primary` for the main action, `tertiary` for the quietest. */
  variant: ButtonVariant;
  /**
   * Button size, from `sm` to `2xl`.
   * @default "md"
   */
  size?: ButtonSize;
  /** Icon rendered before the label. */
  LeadingIcon?: React.ReactElement;
  /** Icon rendered after the label. */
  TrailingIcon?: React.ReactElement;
  /** Renders a square button that only contains this icon. Add an `aria-label` for accessibility. */
  IconOnly?: React.ReactElement;
  /** Disables the button and applies the disabled styles. */
  disabled?: boolean;
}

/** Primary interactive element. Supports five variants, five sizes, leading and trailing icons, and an icon-only mode. */
export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size = "md",
  LeadingIcon,
  TrailingIcon,
  IconOnly,
  disabled,
  ...buttonProps
}) => {
  const ButtonVariantClassName = ButtonVariantClasses[variant];
  const ButtonIconSizeClassName = ButtonIconSizeClasses[size];

  return (
    <button
      {...buttonProps}
      className={classNames("btn-base", className, {
        [ButtonSizeClasses[size]]: !IconOnly,
        [classNames(ButtonIconSizeClassName, "justify-center")]: IconOnly,
        [classNames(
          ButtonVariantClassName.default,
          ButtonVariantClassName.hover,
          ButtonVariantClassName.focus,
        )]: !disabled,
        [classNames(ButtonVariantClassName.disabled, "cursor-not-allowed")]:
          disabled,
      })}
    >
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={classNames(
            {
              "mr-2": size !== "2xl",
              "mr-3": size === "2xl",
            },
            LeadingIcon.props.className,
          )}
        />
      ) : null}
      {children}
      {IconOnly ? (
        <IconOnly.type {...IconOnly.props} size={size === "2xl" ? 24 : 20} />
      ) : null}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={classNames({
            "ml-2": size !== "2xl",
            "ml-3": size === "2xl",
          })}
        />
      ) : null}
    </button>
  );
};
