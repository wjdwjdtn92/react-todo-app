import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(233, 184, 109, 0.3);
  border-radius: 20px;
  border: 1px solid black;
  padding: 12px;
`;

const Title = styled.h2<{ isComplete: boolean }>`
  font-size: 16px;
  flex: 1 1 0;
  text-decoration: ${props => (props.isComplete ? 'line-through' : 'none')};
`;

const CompletedIcon = styled.i<{ isComplete: boolean }>`
  color: #49d8ad;
  font-size: 24px;
  filter: ${props => props.isComplete && 'invert(100%)'};
  cursor: pointer;
`;

export interface ITodoItem {
  id: number;
  title: string;
  content: string;
  isComplete: boolean;
  handleCompleted: (id: number) => void;
}

export function TodoItem({
  id,
  title,
  content,
  isComplete,
  handleCompleted,
}: ITodoItem) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = (event: React.MouseEvent): void => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    const eventTarget = event.target.closest('i');

    if (!eventTarget) {
      return;
    }

    const handleTarget = event.target.closest('li');

    handleCompleted(Number(handleTarget?.dataset.id));
  };

  return (
    <Container
      data-id={id}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <Title isComplete={isComplete}> {isHovering ? content : title}</Title>
      <CompletedIcon className="ic-btn-complete" isComplete={isComplete} />
    </Container>
  );
}
