import React from "react";
import { Form } from "react-final-form";
import { ValidationErrors } from "final-form";

export type GenericFormProps = {
  onSubmit: (data: unknown) => void;
  initialValues: Partial<unknown>;
  children: React.ReactNode;
  validate?: (
    values: unknown
  ) => ValidationErrors | Promise<ValidationErrors> | undefined;
};

export const GenericForm: React.FC<GenericFormProps> = ({
  onSubmit,
  initialValues,
  children,
  validate
}: GenericFormProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      subscription={{ submitting: true, pristine: true }}
      render={({ handleSubmit }) => {
        return <form onSubmit={handleSubmit}>{children}</form>;
      }}
      validate={validate}
    />
  );
};
