import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { images } from "../src/data/images/index";

const meta: Meta = {
  title: "Examples/Avatar with Tailwind",
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "A small example that shows how the design tokens (`text-sm`, `font-medium`, `gray` scale, `w-70` spacing) are used directly with Tailwind utility classes, outside any component.\n\nUse this pattern for one-off layouts, and promote it to a component when it appears more than twice." },
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

const TailwindStory: StoryFn<Props> = () => {
  return (
    <div className="flex mt-6 ml-6 w-70">
      <img
        src={images.demoAvatar}
        alt="avatar"
        className="w-10 h-10 rounded-full cursor-pointer select-none"
      />
      <div className="flex flex-col justify-between ml-3">
        <p className="text-sm font-medium text-gray-700 dark:text-white">
          Veronica Woods
        </p>
        <p className="text-sm font-normal text-gray-500">
          veronica@example.com
        </p>
      </div>
    </div>
  );
};

export const Default = TailwindStory.bind({});
