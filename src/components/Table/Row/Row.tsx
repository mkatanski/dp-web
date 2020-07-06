import styled from "styled-components";
import { TableRow } from "@material-ui/core";

export const Row = styled(TableRow)`
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;
