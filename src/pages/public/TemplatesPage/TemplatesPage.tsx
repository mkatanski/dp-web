import React from "react";
import { PageTitle } from "components/PageTitle";
import { TemplatesTableView } from "views/TemplatesTableView";

const TemplatesPage: React.FC = () => (
  <div>
    <PageTitle category="general" title="Templates" />
    <TemplatesTableView />
  </div>
);

export default TemplatesPage;
