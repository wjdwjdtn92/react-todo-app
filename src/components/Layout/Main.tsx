import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

interface IMain {
  children: React.ReactNode;
}

function Main({ children }: IMain) {
  return <Container>{children}</Container>;
}

export default Main;
