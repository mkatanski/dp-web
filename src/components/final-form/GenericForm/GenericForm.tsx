import React from "react";
import { Form } from "react-final-form";

export type GenericFormProps = {
  onSubmit: (data: unknown) => void;
  initialValues: Partial<unknown>;
  children: React.ReactNode;
};

export const GenericForm: React.FC<GenericFormProps> = ({
  onSubmit,
  initialValues,
  children
}: GenericFormProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      subscription={{ submitting: true, pristine: true }}
      render={({ handleSubmit }) => {
        return <form onSubmit={handleSubmit}>{children}</form>;
      }}
    />
  );
};
