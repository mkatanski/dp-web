import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import { ToggleableDrawerContext } from "./ToggleableDrawerContext";

export type RenderButtonProps = {
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ToggleableDrawerProps = React.PropsWithChildren<{
  drawerAnchor?: "left" | "top" | "right" | "bottom";
  renderButton: (props: RenderButtonProps) => React.ReactNode;
}>;

type DrawerOnClose = (
  event: {},
  reason: "backdropClick" | "escapeKeyDown"
) => void;

export const ToggleableDrawer: React.FC<ToggleableDrawerProps> = ({
  children,
  drawerAnchor,
  renderButton
}: ToggleableDrawerProps) => {
  const [isOpen, setDrawerState] = useState(false);

  const handleCloseDrawer: DrawerOnClose = () => {
    setDrawerState(false);
  };

  return (
    <ToggleableDrawerContext.Provider
      value={{ setDrawerState, drawerState: isOpen }}
    >
      {renderButton({ setDrawerState })}
      <Drawer
        data-testid="toggleable-drawer"
        anchor={drawerAnchor}
        open={isOpen}
        onClose={handleCloseDrawer}
      >
        {children}
      </Drawer>
    </ToggleableDrawerContext.Provider>
  );
};
