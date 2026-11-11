import React, { FC } from "react";
import classNames from "classnames";

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";
type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  /** Text (or element) shown inside the badge. */
  children: string | React.ReactElement;
  /** Extra Tailwind classes, e.g. to position the badge over an image. */
  className?: string;
  /** Color scheme that communicates the meaning of the badge. */
  variant: BadgeVariant;
  /**
   * Visual size of the badge.
   * @default "md"
   */
  size?: BadgeSize;
  /** Icon rendered before the label. Pass an element such as `<FiStar />`. */
  LeadingIcon?: React.ReactElement;
  /** Icon rendered after the label. Pass an element such as `<FiArrowRight />`. */
  TrailingIcon?: React.ReactElement;
}

const BadgeVariantClasses: Record<BadgeVariant, string> = {
  gray: "badge-gray",
  primary: "badge-primary",
  error: "badge-error",
  warning: "badge-warning",
  success: "badge-success",
};

const BadgeSizeClasses: Record<BadgeSize, string> = {
  sm: "badge-sm",
  md: "badge-md ",
  lg: "badge-lg",
};

/** Small label used to highlight a status, category or count. */
export const Badge: FC<BadgeProps> = ({
  variant,
  size = "md",
  LeadingIcon,
  TrailingIcon,
  className,
  children,
}) => {
  const BadgeVariantClassName = BadgeVariantClasses[variant];
  const BadgeSizeClassName = BadgeSizeClasses[size];

  return (
    <div
      className={classNames(
        "badge-base",
        BadgeVariantClassName,
        BadgeSizeClassName,
        className,
      )}
    >
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={classNames("mr-1.5", LeadingIcon.props.className)}
        />
      ) : null}
      {children}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={classNames("ml-1.5", TrailingIcon.props.className)}
        />
      ) : null}
    </div>
  );
};
