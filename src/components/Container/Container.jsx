// components/Container.js
import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%);
`;

const Container = ({ children }) => <ContainerWrapper>{children}</ContainerWrapper>;

export default Container;
