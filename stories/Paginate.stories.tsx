import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";

import { Figma, Paginate, PaginationProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Components/Paginate",
  tags: ["autodocs"],
  component: Paginate,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "Pagination lets people move through a large set of results. It shows numbered pages with truncation on **desktop** and switches to a compact \"Page x out of y\" layout on **mobile**.\n\n### Guidelines\n- `page` is **zero-based**: the first page is `0`.\n- Control the layout with `isMobile`, for example from a media query hook.\n- Place it below the list it controls and keep the page size stable." },
      source: { language: "tsx", code: "import { Paginate } from \"travel-ds\";\n\nconst [page, setPage] = useState(0);\n\n<Paginate page={page} setPage={setPage} totalPages={10} isMobile={false} />" },
    },
    design: {
      type: "figma",
      url: Figma.Paginate,
    },
  },
};

export default meta;

interface Props extends PaginationProps {
  darkMode: boolean;
}

const StoryPagination: StoryFn<Props> = (args) => {
  const [page, setPage] = React.useState<number>(args.page);

  React.useEffect(() => {
    if (page >= 0 && page <= 10) {
      setPage(args.page);
    }
  }, [args.page]);

  return (
    <StoryLayout {...args} className="space-y-4">
      <Paginate
        page={page}
        setPage={setPage}
        totalPages={10}
        isMobile={args.isMobile}
      />
    </StoryLayout>
  );
};

export const Default = StoryPagination.bind({});

Default.args = {
  darkMode: false,
  page: 0,
  totalPages: 10,
  isMobile: false,
};

Default.parameters = {
  controls: { exclude: ["setPage"] },
};
