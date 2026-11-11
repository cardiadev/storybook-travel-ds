import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { FiAlertCircle, FiHelpCircle, FiMail } from "react-icons/fi";
import { TextInput, TextInputProps } from "../src";
import { Figma } from "../src/data";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Components/TextInput",
  tags: ["autodocs"],
  component: TextInput,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: { component: "A single-line text field with optional **label**, **helper text**, **icons** and **leading text**. It is a controlled component.\n\n### States\n- **Default**: ready for input.\n- **Error**: pass `error` to turn the field red and show the message in place of the helper text.\n- **Disabled**: pass `disabled` to prevent edits.\n\n### Guidelines\n- Always set a `label`. A placeholder is a hint, not a label.\n- Use `helperText` to explain format or constraints before the user makes a mistake.\n- `handleChange` receives the string value, not the DOM event." },
      source: { language: "tsx", code: "import { TextInput } from \"travel-ds\";\nimport { FiMail } from \"react-icons/fi\";\n\nconst [email, setEmail] = useState(\"\");\n\n<TextInput\n  type=\"email\"\n  label=\"Email\"\n  placeholder=\"you@example.com\"\n  helperText=\"We never share your email.\"\n  LeadingIcon={<FiMail />}\n  value={email}\n  handleChange={setEmail}\n/>" },
    },
    design: {
      type: "figma",
      url: Figma.TextInput,
    },
  },
};

export default meta;

interface Props extends TextInputProps {
  darkMode: boolean;
}

const StoryTextInput: StoryFn<Props> = (args) => {
  const [text1, setText1] = React.useState<string>(args.value);

  const handleChange = (value: string) => {
    setText1(value);
  };

  return (
    <StoryLayout {...args} className="flex space-x-8">
      <div>
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          error="This is an error message."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
      <div>
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          helperText="This is a hint text to help the user."
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          error="This is an error message."
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryTextInput.bind({});

Default.args = {
  darkMode: false,
  disabled: false,
  value: "",
};

Default.parameters = {
  controls: {
    exclude: [
      "value",
      "type",
      "handleChange",
      "label",
      "leadingText",
      "placeholder",
      "error",
      "helperText",
      "LeadingIcon",
      "TrailingIcon",
    ],
  },
};
