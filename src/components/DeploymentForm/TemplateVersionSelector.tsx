import React, { useRef, useEffect } from "react";
import { SelectField } from "components/final-form/SelectField";
import { MenuItem } from "@material-ui/core";
import { Template } from "store/templates";
import { useField } from "react-final-form";
import _ from "lodash";

export type TemplateVersionSelectorProps = {
  templates: Template[];
};

export const TemplateVersionSelector: React.FC<TemplateVersionSelectorProps> = ({
  templates
}: TemplateVersionSelectorProps) => {
  const {
    input: { value: templateNameValue }
  } = useField("templateName");
  const {
    input: { onChange }
  } = useField("version");

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    _.defer(() => onChangeRef.current(undefined));
  }, [templateNameValue, onChangeRef]);

  const versions: string[] =
    templates.find(template => template.name === templateNameValue)?.versions ||
    [];

  return (
    <SelectField
      name="version"
      label="Template Version"
      variant="outlined"
      fullWidth
    >
      {versions.map(version => (
        <MenuItem key={version} value={version}>
          {version}
        </MenuItem>
      ))}
    </SelectField>
  );
};
