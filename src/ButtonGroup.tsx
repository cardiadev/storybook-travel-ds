import React from "react";
import classNames from "classnames";

interface IButtonItem<T> {
  value: T;
  content: React.ReactNode;
}

export interface ButtonGroupProps<T> {
  /** Value of the currently selected option. */
  active: T;
  /** Called with the option value when the user clicks a button. Works with a `useState` setter. */
  setActive: (active: T) => void;
  /** Buttons to render, each with a unique `value` and the `content` to display. */
  options: IButtonItem<T>[];
}

/** A connected set of buttons where exactly one option is active, useful for view or filter switches. */
export const ButtonGroup = <T extends unknown>({
  active,
  setActive,
  options,
}: ButtonGroupProps<T>) => (
  <>
    {options.map((option, index) => (
      <button
        key={option.value as string}
        className={classNames(
          "inline-flex whitespace-nowrap items-center h-10 px-4 font-medium text-sm focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-500",
          {
            "rounded-l-lg border-r-0": index === 0,
            "border-r-0": index !== 0 && index !== options.length - 1,
            "rounded-r-lg": index === options.length - 1,
            "bg-gray-50 dark:bg-gray-700": active === option.value,
          },
        )}
        onClick={() => setActive(option.value)}
      >
        {option.content}
      </button>
    ))}
  </>
);
