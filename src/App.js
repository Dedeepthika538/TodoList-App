import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';

const App = () => (
  <TodoProvider>
    <TodoList />
  </TodoProvider>
);

export default App;
