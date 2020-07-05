import React from "react";
import { Box, LinearProgress } from "@material-ui/core";

import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const LoadingScreen: React.FC = () => (
  <Container>
    <Box width={400}>
      <LinearProgress />
    </Box>
  </Container>
);
