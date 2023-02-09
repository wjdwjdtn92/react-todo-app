import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TodoList } from '../components/TodoList/TodoList';
import useFetch from '../hooks/useFetch';
import Header from '../components/Layout/Header';
import Main from '../components/Layout/Main';

const Wrapper = styled.div`
  min-width: 375px;
  min-height: 600px;
  max-width: 600px;
  max-height: 850px;

  margin: 0 auto;
  padding: 20px;

  background-color: #fafbe3;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

function TodoListPage() {
  let { date } = useParams();

  if (!date) {
    date = new Date().toISOString().slice(0, 10);
  }

  const currentDate = new Date(date);
  const urlSearch = new URLSearchParams(`date=${date}`);
  const navigate = useNavigate();

  const [data, setData] = useFetch({
    url: `http://localhost:3001/todos?${urlSearch}`,
  });

  const handleNext = () => {
    currentDate.setDate(currentDate.getDate() + 1);
    navigate(`/${currentDate.toISOString().slice(0, 10)}`);
  };

  const handlePrev = () => {
    currentDate.setDate(currentDate.getDate() - 1);
    navigate(`/${currentDate.toISOString().slice(0, 10)}`);
  };

  const handleCompleted = (id: number) => {
    const newData = [...data];
    const index = data.findIndex(item => item.id === id);
    newData[index].isComplete = !newData[index].isComplete;

    setData([...newData]);
  };

  return (
    <Wrapper>
      <Header
        date={date}
        handleNextClick={handleNext}
        handlePrevClick={handlePrev}
      />
      <Main>
        {data && <TodoList handleCompleted={handleCompleted} todos={data} />}
      </Main>
    </Wrapper>
  );
}

export default TodoListPage;
