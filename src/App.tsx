import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TodoListPage from './pages/TodoListPage';
import GlobalStyle from './styles/Globalstyles';
import './styles/fonts.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:date?" element={<TodoListPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
