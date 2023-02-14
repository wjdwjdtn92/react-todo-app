import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Label = styled.label`
  flex: 0 1 100px;
`;

const Input = styled.input`
  flex: 1 1 0;
  height: 100%;
`;

const Button = styled.button`
  background-color: #79e6bf;
  padding: 8px;
  border: 0;
  border-radius: 8px;
`;

interface ITodoForm {
  handleSubmit: (title: string, content: string) => void;
}

export default function TodoInput({ handleSubmit }: ITodoForm) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleCotentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setContent(value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (title.length === 0 || content.length === 0) {
      return;
    }

    handleSubmit(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Container>
        <InputContainer>
          <Label>Todo 등록</Label>
          <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label>상세내용 </Label>
          <Input
            type="textarea"
            value={content}
            onChange={handleCotentChange}
            required
          />
        </InputContainer>
      </Container>
      <Button>등록하기</Button>
    </Form>
  );
}
