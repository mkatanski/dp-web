import React, { useState } from "react";
import { Button, Collapse, ListItem, SvgIconProps } from "@material-ui/core";
import { ExpandMoreOutlined, ExpandLessOutlined } from "@material-ui/icons";
import styled from "styled-components";

export type NavItemParentProps = React.PropsWithChildren<{
  title: string;
  isOpen?: boolean;
  icon?: React.ReactType<SvgIconProps>;
}>;

const ListItemWrapper = styled.span`
  .item {
    display: block;
    padding-top: 0;
    padding-bottom: 0;
  }

  .linkButton {
    color: ${({ theme }) => theme.palette.text.secondary};
    padding: ${({ theme }) => theme.spacing(1.25, 1)};
    justify-content: flex-start;
    text-transform: none;
    letter-spacing: 0;
    width: 100%;
  }

  .linkTitle {
    margin-right: auto;
  }

  .icon {
    display: flex;
    align-items: center;
    margin-right: ${({ theme }) => `${theme.spacing(1)}px`};
  }
`;

export const NavItemParent: React.FC<NavItemParentProps> = ({
  title,
  icon: Icon,
  isOpen: isOpenProp = false,
  children
}: NavItemParentProps) => {
  const [isOpen, setOpen] = useState(isOpenProp);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <ListItemWrapper>
      <ListItem className="item" disableGutters key={title}>
        <Button className="linkButton" onClick={handleToggle}>
          {Icon && <Icon className="icon" fontSize="default" />}
          <span className="linkTitle">{title}</span>
          {isOpen ? (
            <ExpandLessOutlined fontSize="default" color="inherit" />
          ) : (
            <ExpandMoreOutlined fontSize="default" color="inherit" />
          )}
        </Button>
        <Collapse in={isOpen}>{children}</Collapse>
      </ListItem>
    </ListItemWrapper>
  );
};
