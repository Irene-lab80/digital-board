import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: aquamarine;
`;

const click = () => {
  alert('CLicked!');
};

const CustomButton = () => (
  <Button type="button" onClick={click}>123</Button>
);

export default CustomButton;
