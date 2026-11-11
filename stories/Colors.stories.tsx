import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import StoryLayout from "./StoryLayout";

import { ColorBox } from "../src";
import { colors, Figma } from "../src/data";

const meta: Meta = {
  title: "Foundations/Colors",
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "The color palette is defined as Tailwind tokens in `tailwind.config.js`. Every color has a scale from **25** (lightest) to **900** (darkest).\n\n### Palettes\n| Palette | Purpose |\n| --- | --- |\n| `gray` | Text, borders and surfaces |\n| `primary` | Brand color and interactive elements |\n| `success` | Positive feedback and confirmation |\n| `warning` | Caution and pending states |\n| `error` | Errors and destructive actions |\n\n### Guidelines\n- Use the token names (`bg-primary-600`, `text-gray-500`), never raw hex values.\n- Each box below shows the Tailwind token number and its hex.\n- Check contrast: use scale 600 or darker for text on white backgrounds." },
    },
    design: {
      type: "figma",
      url: Figma.Colors,
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

const StoryColors: StoryFn<Props> = (args) => (
  <StoryLayout
    {...args}
    className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11"
  >
    {colors.map((color) => (
      <ColorBox key={color.bgClass} color={color} />
    ))}
  </StoryLayout>
);

export const Default = StoryColors.bind({});

Default.args = {
  darkMode: false,
};
