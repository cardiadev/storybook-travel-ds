import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { Badge, BadgeProps, Figma, images } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Components/Badge",
  tags: ["autodocs"],
  component: Badge,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "Badges are compact labels that highlight a **status**, **category** or **count**. Use them to add context to another element without competing with it.\n\n### When to use\n- Show the state of an item (published, pending, failed).\n- Tag content with a category or attribute.\n- Overlay a highlight on an image, as in `RentalCard`.\n\n### Guidelines\n- Keep the label short, ideally one or two words.\n- Pick the variant by meaning, not by taste: `success` for positive, `warning` for caution, `error` for problems, `primary` for brand emphasis and `gray` for neutral information.\n- Icons are decorative. Never rely on color or icon alone to communicate meaning." },
      source: { language: "tsx", code: "import { Badge } from \"travel-ds\";\nimport { FiAward } from \"react-icons/fi\";\n\n<Badge variant=\"success\">Available</Badge>\n<Badge variant=\"primary\" size=\"lg\" LeadingIcon={<FiAward />}>Superhost</Badge>" },
    },
    design: {
      type: "figma",
      url: Figma.Badge,
    },
  },
};

export default meta;

interface Props extends BadgeProps {
  darkMode: boolean;
}

const StoryBadge: StoryFn<Props> = (args) => (
  <StoryLayout {...args} className="inline-flex flex-col space-y-2">
    <Badge {...args} LeadingIcon={<FiStar />}>
      Label
    </Badge>

    <Badge
      {...args}
      LeadingIcon={<img src={images.NL} alt="nl" className="w-4 h-4" />}
    >
      Label
    </Badge>

    <Badge {...args} TrailingIcon={<FiArrowRight />}>
      Label
    </Badge>
  </StoryLayout>
);

export const Default = StoryBadge.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "className"] },
};
