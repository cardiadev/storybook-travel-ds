import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";

import { Typography, TypographyProps } from "../src";
import { Figma } from "../src/data";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Foundations/Typography",
  tags: ["autodocs"],
  component: Typography,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "The type scale of the design system. Use `Typography` instead of raw tags so size, weight and color stay consistent and dark mode works automatically.\n\n### Scale\n- **Display**: `h1` (72px) down to `h6` (24px). They render the matching semantic heading tag (`<h1>` to `<h6>`).\n- **Text**: `xl` (20px) down to `xs` (12px). They render a `<p>`.\n\n### Guidelines\n- Choose the tag by document structure and the size by design: use `className` or `as=\"label\"` when you need different semantics.\n- Weights: `regular`, `medium`, `semibold`, `bold`.\n- `customColor` takes Tailwind classes. Include a `dark:` variant when you override the default." },
      source: { language: "tsx", code: "import { Typography } from \"travel-ds\";\n\n<Typography variant=\"h3\" customWeight=\"semibold\">Find your next stay</Typography>\n<Typography variant=\"md\" customColor=\"text-gray-500 dark:text-gray-300\">\n  Over 10,000 places to explore.\n</Typography>" },
    },
    design: {
      type: "figma",
      url: Figma.Typography,
    },
  },
};

export default meta;

interface Props extends TypographyProps {
  darkMode: boolean;
}

const TypographyDynamic: StoryFn<Props> = (args) => {
  const isHeading = args.variant.startsWith("h");

  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args}>
        {isHeading ? "Display" : "Text"} {args.variant} <br />{" "}
        {args.customWeight}
      </Typography>
    </StoryLayout>
  );
};

const TypographyHeadings: StoryFn<Props> = (args) => {
  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args} variant="h1">
        Display h1
      </Typography>
      <Typography {...args} variant="h2">
        Display h2
      </Typography>
      <Typography {...args} variant="h3">
        Display h3
      </Typography>
      <Typography {...args} variant="h4">
        Display h4
      </Typography>
      <Typography {...args} variant="h5">
        Display h5
      </Typography>
      <Typography {...args} variant="h6">
        Display h6
      </Typography>
    </StoryLayout>
  );
};

export const Heading = TypographyHeadings.bind({});

Heading.args = {
  customWeight: "regular",
  className: "",
  darkMode: false,
};

Heading.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

const TypographyText: StoryFn<Props> = (args) => {
  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args} variant="xl">
        Text xl
      </Typography>
      <Typography {...args} variant="lg">
        Text lg
      </Typography>
      <Typography {...args} variant="md">
        Text md
      </Typography>
      <Typography {...args} variant="sm">
        Text sm
      </Typography>
      <Typography {...args} variant="xs">
        Text xs
      </Typography>
    </StoryLayout>
  );
};

export const Text = TypographyText.bind({});

Text.args = {
  customWeight: "regular",
  className: "",
  darkMode: false,
};

Text.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

export const Dynamic = TypographyDynamic.bind({});

Dynamic.args = {
  variant: "h1",
  customColor: "", //text-primary-600 dark:text-white
  customWeight: "regular",
  className: "",
  darkMode: false,
};
