import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Button, ListItem, SvgIconProps } from "@material-ui/core";
import styled from "styled-components";

const DEFAULT_SPACING = 8;
const LINK_INDENT = 32;

export type NavItemChildProps = {
  title: string;
  href: string;
  depth: number;
  icon?: React.ReactType<SvgIconProps>;
  info?: React.ReactNode;
};

const ListItemWrapper = styled.span`
  .itemLeaf {
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
  }

  .linkButtonLeaf {
    color: ${({ theme }) => theme.palette.text.secondary};
    padding: ${({ theme }) => theme.spacing(1.25, 1)};
    justify-content: flex-start;
    text-transform: none;
    letter-spacing: 0;
    width: 100%;
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

    &.depth-0 {
      &.title {
        font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
      }
    }
  }

  .linkTitle {
    margin-right: auto;
  }

  .icon {
    display: flex;
    align-items: center;
    margin-right: ${({ theme }) => `${theme.spacing(1)}px`};
  }

  .linkActive {
    color: ${({ theme }) => theme.palette.secondary.main};

    .linkTitle {
      font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    }

    .icon {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;

export const NavItemChild: React.FC<NavItemChildProps> = ({
  title,
  href,
  depth,
  icon: Icon,
  info: Info
}: NavItemChildProps) => {
  let paddingLeft = DEFAULT_SPACING;

  depth > 0 && (paddingLeft = LINK_INDENT + DEFAULT_SPACING * depth);

  const style = { paddingLeft };

  return (
    <ListItemWrapper>
      <ListItem className="itemLeaf" disableGutters key={title}>
        <Button
          component={RouterLink}
          activeClassName="linkActive"
          className={`linkButtonLeaf depth-${depth}`}
          style={style}
          to={href}
        >
          {Icon && <Icon className="icon" fontSize="default" />}
          <span className="linkTitle">{title}</span>
          {Info}
        </Button>
      </ListItem>
    </ListItemWrapper>
  );
};
