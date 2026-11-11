import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { Button, ButtonProps, Figma } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "The button triggers an action. The design system offers five **variants** that express importance, and five **sizes** from `sm` to `2xl`.\n\n### Variants\n| Variant | Use it for |\n| --- | --- |\n| `primary` | The single most important action on a screen |\n| `secondary` | Important actions that are not the main one |\n| `secondaryGray` | Neutral actions with an outline |\n| `tertiary` | Low emphasis actions, such as \"Learn more\" |\n| `tertiaryGray` | The quietest option, for toolbars and dense UI |\n\n### Guidelines\n- Use one `primary` button per view.\n- Write labels as verbs: \"Book now\", not \"Booking\".\n- For `IconOnly` buttons always pass an `aria-label`.\n- The component forwards every native button attribute (`onClick`, `type`, `aria-*`...)." },
      source: { language: "tsx", code: "import { Button } from \"travel-ds\";\nimport { FiArrowRight } from \"react-icons/fi\";\n\n<Button variant=\"primary\" size=\"lg\" onClick={book}>Book now</Button>\n<Button variant=\"secondary\" TrailingIcon={<FiArrowRight />}>Continue</Button>\n<Button variant=\"tertiaryGray\" IconOnly={<FiArrowRight />} aria-label=\"Next\" />" },
    },
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
