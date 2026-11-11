import type { Preview } from "@storybook/react-vite";
import "./docs.css";

const preview: Preview = {
  tags: ["autodocs"],
  argTypes: {
    darkMode: {
      description: "Story helper. Previews the component on a dark surface by adding the Tailwind `dark` class.",
      control: "boolean",
      table: { category: "Story" },
    },
  },
  parameters: {
    controls: { expanded: true, sort: "requiredFirst" },
    layout: "padded",
    options: {
      storySort: {
        order: [
          "Introduction",
          "Getting Started",
          "Foundations",
          ["Colors", "Typography", "Dark Mode"],
          "Components",
          ["Button", "ButtonGroup", "Badge", "TextInput", "Select", "Paginate", "RentalCard"],
          "Navigation",
          "Examples",
        ],
      },
    },
  },
};

export default preview;
