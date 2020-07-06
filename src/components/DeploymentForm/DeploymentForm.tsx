import React, { useContext, useEffect, useRef } from "react";
import { ToggleableDrawerContext } from "components/ToggleableDrawer/ToggleableDrawerContext";
import { GenericForm } from "components/final-form/GenericForm";
import { DeploymentFormView } from "./DeploymentForm.view";
import { useDeploymentsResource } from "hooks/useDeploymentsResource";
import { useTemplatesResource } from "hooks/useTemplatesResource";
import { useTemplatesData } from "hooks/useTemplatesData";
import { SubmitValues } from "./_types";

export type DeploymentFormProps = {};

export const DeploymentForm: React.FC<DeploymentFormProps> = () => {
  const { setDrawerState } = useContext(ToggleableDrawerContext);
  const { postData, fetchData: fetchDeployments } = useDeploymentsResource();
  const { fetchData: fetchTemplates } = useTemplatesResource();
  const fetchRef = useRef(fetchTemplates);
  const templates = useTemplatesData();

  useEffect(() => {
    fetchRef.current();
  }, [fetchRef]);

  return (
    <GenericForm
      onSubmit={async values => {
        const vals = values as SubmitValues;

        await postData({
          templateName: vals.templateName,
          version: vals.version,
          url: vals.url
        });

        fetchDeployments();

        setDrawerState(false);
      }}
      initialValues={{}}
    >
      <DeploymentFormView
        data-testid="DeploymentFormView"
        onCloseClick={() => setDrawerState(false)}
        templates={templates}
      />
    </GenericForm>
  );
};
