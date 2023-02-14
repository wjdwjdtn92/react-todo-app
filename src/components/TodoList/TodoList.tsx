import React from "react";
import styled from "styled-components";

import { ITodoItem, TodoItem } from "./TodoItem";

const Container = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 16px;
`;

export interface ITodoList {
  todos: ITodoItem[];
  handleCompleted: (id: number) => void;
}

export function TodoList({ todos, handleCompleted }: ITodoList) {
  const handleClick = (id: number) => {
    handleCompleted(id);
  };

  return (
    <Container>
      {todos.map((todo: ITodoItem) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          content={todo.content}
          isComplete={todo.isComplete}
          handleCompleted={handleClick}
        />
      ))}
    </Container>
  );
}
