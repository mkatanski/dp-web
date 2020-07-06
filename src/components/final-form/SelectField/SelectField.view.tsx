import React from "react";
import {
  FormControl as MuiFormControl,
  InputLabel,
  Select,
  FormHelperText,
  SelectProps
} from "@material-ui/core";
import styled from "styled-components";

export type SelectFieldViewProps = SelectProps & {
  name: string;
  value: unknown;
  label?: React.ReactNode;
  id?: string;
  testId?: string;
  errorMessage?: string;
  onChange?: (value: unknown) => void;
};

const FormControl = styled(MuiFormControl)`
  min-width: 100px;
  width: 100%;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;

export const SelectFieldView: React.FC<SelectFieldViewProps> = ({
  children,
  label,
  name,
  testId = `rff-select-${name}`,
  id = name,
  value,
  errorMessage: error,
  onChange,
  variant,
  ...rest
}: SelectFieldViewProps) => {
  const handleChange: SelectProps["onChange"] = event => {
    onChange && onChange(event.target.value as string[]);
  };

  return (
    <FormControl variant={variant} error={!!error}>
      {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
      <Select
        {...rest}
        labelId={`${id}-label`}
        id={id}
        name={name}
        data-testid={testId}
        value={value}
        onChange={handleChange}
        label={label}
        inputProps={{
          name,
          id,
          "data-testid": `${testId}-input`
        }}
      >
        {children}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
