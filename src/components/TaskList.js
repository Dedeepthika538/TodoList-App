import React from 'react';
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { useTodo } from '../context/TodoContext';

const TaskList = () => {
  const { state, dispatch } = useTodo();

  return (
    <List>
      {state.tasks.map((task, index) => (
        <ListItem
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: state.editIndex === index ? '#f0f0f0' : 'transparent', // Highlight the item being edited
            borderRadius: '4px',
          }}
        >
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: index })}
          />
          <ListItemText
            primary={task.text}
            sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          />
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => {
              dispatch({ type: 'SET_EDIT_TASK', payload: { index } });
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch({ type: 'DELETE_TASK', payload: index })}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
