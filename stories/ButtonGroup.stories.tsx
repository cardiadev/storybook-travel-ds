import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { FiGrid, FiList } from "react-icons/fi";

import {
  ButtonGroup,
  ButtonGroupProps,
  Figma,
  options1,
  options2,
} from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Components/ButtonGroup",
  tags: ["autodocs"],
  component: ButtonGroup,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "A button group joins related options into one segmented control where **exactly one option is active**. It is controlled: you own the state and the component reports changes.\n\n### When to use\n- Switch between views (list, grid, map).\n- Pick a filter or time range.\n\n### Guidelines\n- Use two to five options with short labels.\n- Each option needs a unique `value`. The type of `value` is generic, so it can be a string, a number or an enum.\n- For choices that submit data, prefer `Select`." },
      source: { language: "tsx", code: "import { ButtonGroup } from \"travel-ds\";\n\nconst [view, setView] = useState(\"list\");\n\n<ButtonGroup\n  active={view}\n  setActive={setView}\n  options={[\n    { value: \"list\", content: \"List\" },\n    { value: \"map\", content: \"Map\" },\n  ]}\n/>" },
    },
    design: {
      type: "figma",
      url: Figma.ButtonGroup,
    },
  },
};

export default meta;

interface Props extends ButtonGroupProps<string> {
  darkMode: boolean;
}

const StoryButtonGroup: StoryFn<Props> = (args) => {
  const [activeItem1, setActiveItem1] = React.useState<string>(
    options1[1].value,
  );

  const [activeItem2, setActiveItem2] = React.useState<string>(
    options2[1].value,
  );

  type ViewOption = "list" | "grid";
  const [viewOption, setViewOption] = React.useState<ViewOption>("list");

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup
          {...args}
          active={activeItem1}
          setActive={setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup
          {...args}
          active={activeItem2}
          setActive={setActiveItem2}
          options={options2}
        />
      </div>
      <div>
        <ButtonGroup
          active={viewOption}
          options={[
            {
              content: <FiList size={20} />,
              value: "list",
            },
            {
              content: <FiGrid size={20} />,
              value: "grid",
            },
          ]}
          setActive={setViewOption}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroup.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["active", "setActive", "options"] },
};
