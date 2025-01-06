import { createContext, useContext, useReducer } from 'react';

const initialState = {
  tasks: [],
  editIndex: null,
  isEditing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, completed: false }],
      };
    case 'UPDATE_TASK':
      const updatedTasks = state.tasks.map((t, index) =>
        index === state.editIndex ? { ...t, text: action.payload } : t
      );
      return {
        ...state,
        tasks: updatedTasks,
        isEditing: false,
        editIndex: null,
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, i) => i !== action.payload),
      };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map((t, i) =>
          i === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case 'SET_EDIT_TASK':
      return {
        ...state,
        editIndex: action.payload.index,
        isEditing: true,
      };
    default:
      return state;
  }
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
