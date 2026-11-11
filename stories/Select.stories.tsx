import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { FiCalendar, FiDollarSign } from "react-icons/fi";
import { Select, SelectProps, IOption } from "../src";
import StoryLayout from "./StoryLayout";

import { countries, dates, Figma, prices } from "../src/data";

const meta: Meta = {
  title: "Components/Select",
  tags: ["autodocs"],
  component: Select,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "A dropdown to choose **one value** from a list. It is built on Headless UI `Listbox`, so it supports keyboard navigation, focus management and screen readers out of the box.\n\n### Guidelines\n- Use it when there are more than four options. For fewer, consider `ButtonGroup`.\n- Always provide a `placeholder` that describes the choice, such as \"Select a country\".\n- `setSelectedOption` receives the option `value`, so keep your state as the value and look up the option to pass `selectedOption`.\n- Set `width` (for example `w-72`) to make the field and its menu a fixed width." },
      source: { language: "tsx", code: "import { Select } from \"travel-ds\";\n\nconst [value, setValue] = useState<string>();\n\n<Select\n  placeholder=\"Select a country\"\n  options={countries}\n  selectedOption={countries.find((o) => o.value === value)}\n  setSelectedOption={setValue}\n  width=\"w-72\"\n/>" },
    },
    design: {
      type: "figma",
      url: Figma.Select,
    },
  },
};

export default meta;

interface Props extends SelectProps {
  darkMode: boolean;
}

const StorySelect: StoryFn<Props> = (args) => {
  const [selectedCountry, setSelectedCountry] = React.useState<IOption>(
    countries[0],
  );
  const [selectedDate, setSelectedDate] = React.useState<IOption>();
  const [selectedPrice, setSelectedPrice] = React.useState<IOption>();

  const handleSelectCountry = (countryValue: string) => {
    const country = countries.find((p) => p.value === countryValue) as IOption;
    setSelectedCountry(country);
  };

  const handleSelectDate = (dateValue: string) => {
    const date = dates.find((p) => p.value === dateValue) as IOption;
    setSelectedDate(date);
  };

  const handleSelectPrice = (priceValue: string) => {
    const price = prices.find((p) => p.value === priceValue) as IOption;
    setSelectedPrice(price);
  };

  return (
    <StoryLayout darkMode={args.darkMode} className="space-x-3 space-y-3">
      <Select
        options={countries}
        selectedOption={selectedCountry}
        setSelectedOption={handleSelectCountry}
        placeholder="Select a country"
        width="w-50"
      />

      <Select
        options={dates}
        LeadingIcon={<FiCalendar />}
        selectedOption={selectedDate}
        setSelectedOption={handleSelectDate}
        placeholder="Select a date"
        width="w-50"
      />

      <Select
        options={prices}
        LeadingIcon={<FiDollarSign />}
        selectedOption={selectedPrice}
        setSelectedOption={handleSelectPrice}
        placeholder="Select a price"
        width="w-50"
      />
    </StoryLayout>
  );
};

export const Default = StorySelect.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: {
    exclude: ["options", "selectedOption", "setSelectedOption", "LeadingIcon"],
  },
};
