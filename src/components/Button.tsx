// components/SignUpButton.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 600;
  margin-top: 42px;
  margin-left: 42px;
  cursor: pointer;
`;

const SignUpButton = ({ children, onClick }) => <Button onClick={onClick}>{children}</Button>;

export default SignUpButton;
