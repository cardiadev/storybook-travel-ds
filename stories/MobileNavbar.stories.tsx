import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";

import StoryLayout from "./StoryLayout";
import { MobileNavbar, MobileNavbarProps, SideNav } from "../src";
import { navItemsTop, navItemsBottom, Figma } from "../src/data";
import { FiX } from "react-icons/fi";

const meta: Meta = {
  title: "Navigation/MobileNavbar",
  tags: ["autodocs"],
  component: MobileNavbar,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "The mobile navbar is the top bar on small screens. It shows the logo and app name, and a **menu button** that opens the navigation.\n\n### Usage\nIt is a presentational component: you decide what opens. In the example below it toggles a full-height `SideNav` over a dimmed backdrop.\n\n### Guidelines\n- Keep it fixed at the top and above page content (`z-40` or higher).\n- Hide it from the `md` breakpoint up, where `SideNav` takes over." },
      source: { language: "tsx", code: "import { MobileNavbar } from \"travel-ds\";\n\nconst [open, setOpen] = useState(false);\n\n<MobileNavbar open={open} toggleOpen={() => setOpen(!open)} />" },
    },
    design: {
      type: "figma",
      url: Figma.Navbar,
    },
  },
};

export default meta;

interface Props extends MobileNavbarProps {
  darkMode: boolean;
}

const StoryMobileNavbar: StoryFn<Props> = (args) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StoryLayout {...args} noPadding>
      <MobileNavbar open={open} toggleOpen={handleToggle} />

      {open ? (
        <div
          className="fixed top-0 left-0 z-40 w-screen h-screen bg-gray-500 cursor-pointer bg-opacity-80"
          onClick={() => setOpen(false)}
        >
          <FiX size={40} className="fixed text-white top-5 right-9" />
        </div>
      ) : null}

      {open ? (
        <SideNav
          className="relative z-50 h-screen -mt-20"
          navItemsTop={navItemsTop}
          navItemsBottom={navItemsBottom}
          open={true}
          setOpen={handleToggle}
          username="Veronica Woods"
          email="veronica@example.com"
        />
      ) : null}
    </StoryLayout>
  );
};

export const Default = StoryMobileNavbar.bind({});

Default.args = {
  darkMode: false,
  open: false,
};

Default.parameters = {
  controls: { exclude: ["open", "toggleOpen"] },
};
