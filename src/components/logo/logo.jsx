// components/Logo.js
import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 151.32px;
  height: 41px;
  margin: 0 auto;
`;

const Logo = () => <LogoImage src="path/to/logo.png" alt="Logo" />;

export default Logo;
