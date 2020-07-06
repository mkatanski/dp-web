import React from "react";
import { FieldProps, FieldRenderProps, useField } from "react-final-form";
import { TextField as MuiTextField, TextFieldProps } from "@material-ui/core";
import styled from "styled-components";

export type TextInputProps = { testId?: string; id?: string } & FieldProps<
  {},
  FieldRenderProps<TextFieldProps>
>;

export const TextFieldElement = styled(MuiTextField)`
  .MuiFormLabel-root.Mui-error {
    > span {
      color: ${({ theme }) => theme.textSecondary};
      opacity: 0.6;
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.textSecondary};
    }
  }

  .MuiFormHelperText-root {
    padding-top: 5px;
    font-size: 14px;
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.textSecondary};
  }

  .MuiInput-underline {
    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
    }

    &:before,
    &:after {
      border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
    }
  }

  && {
    margin: 10px 0;
  }

  fieldset {
    outline: none;
  }
`;

export const TextField: React.FC<TextInputProps> = ({
  name,
  testId = `rff-textfield-${name}`,
  id = name,
  fullWidth = true,
  variant = "outlined",
  ...props
}: TextInputProps) => {
  const { input, meta } = useField(name, props);

  return (
    <TextFieldElement
      {...input}
      id={id}
      label={props.label}
      error={meta.touched && !!meta.error}
      inputProps={{
        "data-testid": testId
      }}
      fullWidth={fullWidth}
      variant={variant}
      helperText={meta.touched && !!meta.error && meta.error}
      multiline={props.multiline}
      rows={props.rows}
    />
  );
};
