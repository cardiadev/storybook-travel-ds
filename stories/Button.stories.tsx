import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { Button, ButtonProps, Figma } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Button,
    },
  },
};

export default meta;

interface Props extends ButtonProps {
  darkMode: boolean;
}

const StoryButton: StoryFn<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Button {...args}>Button CTA</Button>

    <Button {...args} LeadingIcon={<FiStar />}>
      Button CTA
    </Button>

    <Button {...args} TrailingIcon={<FiArrowRight />}>
      Button CTA
    </Button>

    <Button {...args} IconOnly={<FiArrowRight />} />
  </StoryLayout>
);

export const Default = StoryButton.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
  disabled: false,
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "IconOnly"] },
};
