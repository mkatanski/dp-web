import React from "react";
import { PageTitle } from "components/PageTitle";
import { TemplatesTableView } from "views/TemplatesTableView";

const TemplatesPage: React.FC = () => (
  <>
    <PageTitle category="general" title="Templates" />
    <TemplatesTableView />
  </>
);

export default TemplatesPage;
