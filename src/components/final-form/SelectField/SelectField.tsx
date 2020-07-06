import React from "react";
import { SelectFieldView, SelectFieldViewProps } from "./SelectField.view";
import { useField } from "react-final-form";

// We use omit to filter out properties of components view
// which we don't want to expose
// See: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk
// for usage example
export type SelectFieldProps = Omit<
  SelectFieldViewProps,
  "value" | "onChange" | "value" | "errorMessage" | "error"
> & {};

export const SelectField: React.FC<SelectFieldProps> = ({
  children,
  name,
  ...rest
}: SelectFieldProps) => {
  const { input, meta } = useField(name, { parse: v => v });

  const handleOnChange = (value: unknown) => {
    input.onChange(value);
  };

  return (
    <SelectFieldView
      {...rest}
      name={name}
      value={input.value}
      onChange={handleOnChange}
      errorMessage={meta.error}
    >
      {children}
    </SelectFieldView>
  );
};
