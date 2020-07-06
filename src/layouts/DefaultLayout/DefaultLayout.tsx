import React from "react";
import styled from "styled-components";

import { mediaSize } from "styles/theme/mediaQueries";
import { SidebarStateProvider } from "lib/sidebar";

import { Container as BareContainer } from "@material-ui/core";
import LayoutBase, { LayoutBaseProps } from "layouts/LayoutBase";
import { TopBar } from "components/TopBar";
import { Sidebar } from "components/Sidebar";
import { NavListView } from "views/NavListView";
import { usePendingTimer } from "hooks/usePendingTimer";

const Container = styled(BareContainer)`
  min-height: 100vh;
  display: flex;
  padding: 0;

  @media all and (-ms-high-contrast: none) {
    height: 0;
  }
`;

const Content = styled(BareContainer)`
  flex-grow: 1;
  max-width: 100%;
  padding: ${({ theme }) => `${theme.spacing(8, 0, 0, 0)}`};

  ${mediaSize.largeDesktop} {
    padding: ${({ theme }) => `${theme.spacing(8, 0, 0, 32)}`};
  }
`;

const PageContent = styled(BareContainer)`
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DefaultLayout: React.FC<LayoutBaseProps> = ({
  children,
  ...rest
}: LayoutBaseProps) => {
  usePendingTimer();
  return (
    <SidebarStateProvider>
      <TopBar>
        <h3>Template Deployments</h3>
      </TopBar>
      <Sidebar>
        <NavListView />
      </Sidebar>
      <Container maxWidth={false}>
        <Content maxWidth={false}>
          <PageContent maxWidth={false}>
            <LayoutBase {...rest}>{children}</LayoutBase>
          </PageContent>
        </Content>
      </Container>
    </SidebarStateProvider>
  );
};

export default DefaultLayout;
