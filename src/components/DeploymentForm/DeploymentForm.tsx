import React, { useContext } from "react";
import { ToggleableDrawerContext } from "components/ToggleableDrawer/ToggleableDrawerContext";
import { GenericForm } from "components/final-form/GenericForm";
import { DeploymentFormView } from "./DeploymentForm.view";
import { useDeploymentsResource } from "hooks/useDeploymentsResource";

export type DeploymentFormProps = {};

type SubmitValues = {
  version: string;
  templateName: string;
};

export const DeploymentForm: React.FC<DeploymentFormProps> = () => {
  const { setDrawerState } = useContext(ToggleableDrawerContext);
  const { postData, fetchData } = useDeploymentsResource();

  return (
    <GenericForm
      onSubmit={async values => {
        const vals = values as SubmitValues;

        await postData({
          templateName: vals.templateName,
          version: vals.version,
          url: "https://indust.co"
        });

        fetchData();

        setDrawerState(false);
      }}
      initialValues={{}}
    >
      <DeploymentFormView
        data-testid="DeploymentFormView"
        onCloseClick={() => setDrawerState(false)}
      />
    </GenericForm>
  );
};
