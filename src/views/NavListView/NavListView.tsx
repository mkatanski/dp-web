import React from "react";
import { paths } from "config/paths";
import { List } from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import { NavItem } from "components/NavItem";
import styled from "styled-components";

const NavListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Nav = styled.nav`
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(0, 2, 2, 2)};
  flex-grow: 1;
`;
export const NavListView: React.FC = () => (
  <NavListWrapper>
    <Nav>
      <NavItem title="General" depth={0} icon={Dashboard} href="" isOpen>
        <List>
          <NavItem title="Deployments" href={paths.deployments} depth={1} />
          <NavItem title="Templates" href={paths.templates} depth={1} />
        </List>
      </NavItem>
    </Nav>
  </NavListWrapper>
);
