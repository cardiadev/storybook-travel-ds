import React, { FC } from "react";
import classNames from "classnames";

type TypographyVariant =
  // Text
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  // Display
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

type TypographyWeightOption = "regular" | "medium" | "semibold" | "bold";

type TypographyWeightValue =
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold";

const TypographyVariantClasses: Record<TypographyVariant, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  h6: "text-h6",
  h5: "text-h5",
  h4: "text-h4",
  h3: "text-h3",
  h2: "text-h2",
  h1: "text-h1",
};

const TypographyWeightClasses: Record<
  TypographyWeightOption,
  TypographyWeightValue
> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export interface TypographyProps {
  /** Render as a `label` instead of the default element (`h1` to `h6` for display variants, `p` otherwise). */
  as?: "label";
  /** Type scale step. `h1` to `h6` are display sizes, `xs` to `xl` are body sizes. */
  variant: TypographyVariant;
  /** Tailwind text color classes, e.g. `text-gray-500 dark:text-white`. Defaults to black in light mode and white in dark mode. */
  customColor?: string;
  /**
   * Font weight.
   * @default "regular"
   */
  customWeight?: TypographyWeightOption;
  /** Extra Tailwind classes. */
  className?: string;
  /** Content of the text element. */
  children: string | React.ReactNode;
}

/** Text component that applies the design system type scale and renders semantic heading tags automatically. */
export const Typography: FC<TypographyProps> = ({
  as,
  variant,
  customColor,
  customWeight = "regular",
  className,
  children,
}) => {
  const TypographyVariantClassName = TypographyVariantClasses[variant];
  const TypographyWeightClassName = TypographyWeightClasses[customWeight];

  // h1-h6 should have corresponding component
  // others should be p
  const isHeading = variant.startsWith("h");
  const Component = as
    ? as
    : ((isHeading ? variant : "p") as keyof JSX.IntrinsicElements);

  return (
    <Component
      className={classNames(
        TypographyVariantClassName,
        TypographyWeightClassName,
        className,
        {
          ["tracking-tight"]: ["h1", "h2", "h3"].includes(variant),
          ["text-black dark:text-white"]: !customColor,
        },
        customColor,
      )}
    >
      {children}
    </Component>
  );
};
