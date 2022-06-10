import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4877F2;
  color: #ffffff;
  padding: 6px 26.5px;
  border-radius: 4px;
  font-weight: 500;
  white-space: nowrap;
  &:hover {
    background-color: #3A95FF;
  }
`;

type PropsType = {
  children: string;
}

const click = () => {
  alert('Clicked!');
};

const CustomButton: React.FC<PropsType> = ({ children }) => (
  <Button type="button" onClick={click}>{children}</Button>
);

export default CustomButton;
