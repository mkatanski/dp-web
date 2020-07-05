/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
export * from "@material-ui/core";

export const Table = ({ children, className, ...rest }: any) => (
  <table id="MUI.Table" className={className} data-props={rest}>
    {children}
  </table>
);

export const TableBody = ({ children, ...rest }: any) => (
  <tbody id="MUI.TableBody" data-props={rest}>
    {children}
  </tbody>
);

export const TableHead = ({ children, ...rest }: any) => (
  <th id="MUI.TableHead" data-props={rest}>
    {children}
  </th>
);

export const TableContainer = ({ children, className, ...rest }: any) => (
  <div id="MUI.TableContainer" className={className} data-props={rest}>
    {children}
  </div>
);

export const TableCell = ({
  children,
  onClick,
  className,
  ...rest
}: React.PropsWithChildren<{ onClick?: () => void; className?: string }>) => (
  <td
    id="MUI.TableCell"
    onClick={onClick}
    className={className}
    data-props={rest}
  >
    {children}
  </td>
);

export const TableRow = ({ children, className, onClick, ...rest }: any) => (
  <tr
    id="MUI.TableRow"
    className={className}
    onClick={onClick}
    {...(Object.keys(rest).length ? { "data-props": { ...rest } } : {})}
  >
    {children}
  </tr>
);

export const TableSortLabel = ({ children, ...rest }: any) => (
  <div id="MUI.TableSortLabel" data-props={rest}>
    {children}
  </div>
);

export const TextField = ({ children, className, ...rest }: any) => (
  <input id="MUI.TextField" className={className} data-props={rest}>
    {children}
  </input>
);

export const Button = ({ children, onClick, className, ...rest }: any) => (
  <button
    id="MUI.Button"
    onClick={onClick}
    className={className}
    data-testid={rest["data-testid"]}
    data-props={rest}
  >
    {children}
  </button>
);

export const Paper = ({ children, className, ...rest }: any) => (
  <div id="MUI.Paper" className={className} data-props={rest}>
    {children}
  </div>
);

export const Container = ({ children, className, ...rest }: any) => (
  <div id="MUI.Container" className={className} data-props={rest}>
    {children}
  </div>
);

export const Card = ({ children, className, ...rest }: any) => (
  <div id="MUI.Card" className={className} data-props={rest}>
    {children}
  </div>
);

export const Typography = ({ children, className, ...rest }: any) => (
  <div id="MUI.Typography" className={className} data-props={rest}>
    {children}
  </div>
);

export const Grid = ({ children, className, ...rest }: any) => (
  <div id="MUI.Grid" className={className} data-props={rest}>
    {children}
  </div>
);

export const CardContent = ({ children, className, ...rest }: any) => (
  <div id="MUI.CardContent" className={className} data-props={rest}>
    {children}
  </div>
);

export const CardHeader = ({ children, className, ...rest }: any) => (
  <div id="MUI.CardHeader" className={className} data-props={rest}>
    {children}
  </div>
);

export const Divider = ({ children, className, ...rest }: any) => (
  <div id="MUI.Divider" className={className} data-props={rest}>
    {children}
  </div>
);

export const IconButton = ({ children, onClick, className, ...rest }: any) => (
  <span id="MUI.IconButton" onClick={onClick} className={className} {...rest}>
    {children}
  </span>
);

export const Drawer = ({ children, className, ...rest }: any) => (
  <div id="MUI.Drawer" className={className} data-props={rest}>
    {children}
  </div>
);
export const TablePagination = ({ children, ...rest }: any) => (
  <div id="MUI.TablePagination" data-props={rest}>
    {children}
  </div>
);

export const List = ({ children, className, ...rest }: any) => (
  <ul id="MUI.List" className={className} data-props={rest}>
    {children}
  </ul>
);

export const ListSubheader = ({ children, className, ...rest }: any) => (
  <li id="MUI.ListSubheader" className={className} data-props={rest}>
    {children}
  </li>
);

export const ListItem = ({ children, className, ...rest }: any) => (
  <li id="MUI.ListItem" className={className} data-props={rest}>
    {children}
  </li>
);

export const CardActions = ({ children, className, ...rest }: any) => (
  <div id="MUI.CardActions" className={className} data-props={rest}>
    {children}
  </div>
);

export const AppBar = ({ children, ...rest }: any) => (
  <div id="MUI.AppBar" data-props={rest}>
    {children}
  </div>
);

export const Toolbar = ({ children, ...rest }: any) => (
  <div id="MUI.Toolbar" data-props={rest}>
    {children}
  </div>
);

export const CircularProgress = ({ className, ...rest }: any) => (
  <div id="MUI.CircularProgress" className={className} data-props={rest} />
);

export const LinearProgress = ({ className, ...rest }: any) => (
  <div id="MUI.LinearProgress" className={className} data-props={rest} />
);

export const Box = ({ children, className, ...rest }: any) => (
  <div id="MUI.Box" className={className} data-props={rest}>
    {children}
  </div>
);

export const Switch = ({ ...rest }: any) => (
  <div id="MUI.Switch" data-props={rest} />
);

export const FormControl = ({ children, className, ...rest }: any) => (
  <div id="MUI.FormControl" className={className} data-props={rest}>
    {children}
  </div>
);

export const Select = ({ children, className, name, ...rest }: any) => (
  <select id="MUI.Select" className={className} name={name} data-props={rest}>
    {children}
  </select>
);

export const FormHelperText = ({ children, className, ...rest }: any) => (
  <div id="MUI.FormHelperText" className={className} data-props={rest}>
    {children}
  </div>
);

export const InputLabel = ({ children, className, ...rest }: any) => (
  <div id="MUI.InputLabel" className={className} data-props={rest}>
    {children}
  </div>
);

export const MenuItem = ({ children, className, ...rest }: any) => (
  <option id="MUI.MenuItem" className={className} data-props={rest}>
    {children}
  </option>
);

export const FormGroup = ({ children, className, ...rest }: any) => (
  <div id="MUI.FormGroup" className={className} data-props={rest}>
    {children}
  </div>
);

export const FormControlLabel = ({ control, className, ...rest }: any) => (
  <div id="MUI.FormControlLabel" className={className} data-props={rest}>
    {control}
  </div>
);

export const ListItemAvatar = ({ children, className, ...rest }: any) => (
  <div id="MUI.ListItemAvatar" className={className} data-props={rest}>
    {children}
  </div>
);

export const Tabs = ({ children, className, ...rest }: any) => (
  <div id="MUI.Tabs" className={className} data-props={rest}>
    {children}
  </div>
);

export const Avatar = ({ className, ...rest }: any) => (
  <img id="MUI.Avatar" className={className} data-props={rest} />
);

export const Tab = ({ children, className, ...rest }: any) => (
  <div id="MUI.Tab" className={className} data-props={rest}>
    {children}
  </div>
);

export const Collapse = ({ children, className, ...rest }: any) => (
  <div id="MUI.Collapse" className={className} data-props={rest}>
    {children}
  </div>
);

export const Chip = ({ children, className, ...rest }: any) => (
  <div id="MUI.Chip" className={className} data-props={rest}>
    {children}
  </div>
);

export const Menu = ({ children, onClick, className, ...rest }: any) => (
  <div id="MUI.Menu" onClick={onClick} className={className} data-props={rest}>
    {children}
  </div>
);
