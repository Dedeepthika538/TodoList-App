import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useTodo } from '../context/TodoContext';

const TaskInput = () => {
  const { state, dispatch } = useTodo();
  const [task, setTask] = useState('');

  useEffect(() => {
    if (state.isEditing && state.editIndex !== null) {
      // Prepopulate the TextField with the task to be edited
      setTask(state.tasks[state.editIndex].text);
    } else {
      setTask('');
    }
  }, [state.isEditing, state.editIndex, state.tasks]);

  const handleAddOrUpdate = () => {
    if (task.trim() !== '') {
      if (state.isEditing) {
        dispatch({ type: 'UPDATE_TASK', payload: task });
      } else {
        dispatch({ type: 'ADD_TASK', payload: task });
      }
      setTask('');
    }
  };

  return (
    <>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '1rem' }} // Use sx for styling
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: '1rem' }} // Use sx for styling
        onClick={handleAddOrUpdate}
      >
        {state.isEditing ? 'Update Task' : 'Add Task'}
      </Button>
    </>
  );
};

export default TaskInput;
