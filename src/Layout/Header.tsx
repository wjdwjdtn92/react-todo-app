import React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import styled, { css } from 'styled-components';

const Container = styled.div`
  background-color: #79e6bf;
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
`;

const buttonStyles = css`
  font-size: 24px;
  font-weight: bold;
`;

const NextButton = styled(GrNext)`
  ${buttonStyles}
`;

const PrevButton = styled(GrPrevious)`
  ${buttonStyles}
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  flex: 1 1 0;
`;

interface IHeader {
  date: string;
  handleNextClick: () => void;
  handlePrevClick: () => void;
}

function Header({ date, handleNextClick, handlePrevClick }: IHeader) {
  return (
    <Container>
      <PrevButton onClick={handlePrevClick} />
      <Title>todo ({date})</Title>
      <NextButton onClick={handleNextClick} />
    </Container>
  );
}

export default Header;
