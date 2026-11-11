import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import StoryLayout from "./StoryLayout";

import { ColorBox } from "../src";
import { colors, Figma } from "../src/data";

const meta: Meta = {
  title: "Colors",
  parameters: {
    controls: { expanded: true },
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
