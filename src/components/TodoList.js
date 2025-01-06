import React from 'react';
import { Container, Typography } from '@mui/material';
import TaskInput from './TaskInput';
import TaskList from './TaskList';



const TodoList = () => {

  return (
    <Container sx={{ marginTop: '2rem'}}maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Todo List
      </Typography>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default TodoList;
