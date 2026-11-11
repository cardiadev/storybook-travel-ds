import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";

import StoryLayout from "./StoryLayout";
import { SideNav, ISideNavProps } from "../src";
import { navItemsTop, navItemsBottom, Figma } from "../src/data";

const meta: Meta = {
  title: "Navigation/SideNav",
  tags: ["autodocs"],
  component: SideNav,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "The side navigation is the main wayfinding element on desktop. It can be **expanded** (icons and labels) or **collapsed** (icons only).\n\n### Features\n- Search field that filters entries.\n- Nested items with expandable dropdowns.\n- Active item tracking.\n- A profile area with the user name and email.\n\n### Guidelines\n- Put primary destinations in `navItemsTop` and utility links (support, settings) in `navItemsBottom`.\n- Each item follows `INavItem`: an `order`, a `label`, an `icon` and an optional `path` or `subItems`.\n- On small screens pair it with `MobileNavbar`." },
      source: { language: "tsx", code: "import { SideNav, navItemsTop, navItemsBottom } from \"travel-ds\";\n\nconst [open, setOpen] = useState(true);\n\n<SideNav\n  navItemsTop={navItemsTop}\n  navItemsBottom={navItemsBottom}\n  open={open}\n  setOpen={setOpen}\n  username=\"Veronica Woods\"\n  email=\"veronica@example.com\"\n/>" },
    },
    design: {
      type: "figma",
      url: Figma.Navbar,
    },
  },
};

export default meta;

interface Props extends ISideNavProps {
  darkMode: boolean;
}

const StorySideNav: StoryFn<Props> = (args) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <StoryLayout {...args} className="flex flex-col h-screen" noPadding>
      <SideNav
        navItemsTop={navItemsTop}
        navItemsBottom={navItemsBottom}
        open={open}
        setOpen={setOpen}
        username="Veronica Woods"
        email="veronica@example.com"
      />
    </StoryLayout>
  );
};

export const Default = StorySideNav.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: {
    exclude: [
      "open",
      "setOpen",
      "navItemsTop",
      "navItemsBottom",
      "username",
      "email",
    ],
  },
};
