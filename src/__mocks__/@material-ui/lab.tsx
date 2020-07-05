/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const ToggleButton = ({
  children,
  onClick,
  className,
  ...rest
}: any) => (
  <button
    id="MUI.ToggleButton"
    onClick={onClick}
    className={className}
    data-testid={rest["data-testid"]}
    data-props={rest}
  >
    {children}
  </button>
);

export const ToggleButtonGroup = ({
  children,
  onClick,
  className,
  ...rest
}: any) => (
  <div
    id="MUI.ToggleButtonGroup"
    onClick={onClick}
    className={className}
    data-testid={rest["data-testid"]}
    data-props={rest}
  >
    {children}
  </div>
);

export const Skeleton = ({ ...rest }: any) => (
  <div id="MUI.Skeleton" data-props={rest} />
);
