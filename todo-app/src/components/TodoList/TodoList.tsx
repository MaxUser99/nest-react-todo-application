import React from 'react';
import { ITodo } from '../../interfaces/ITodo';

interface IProps {
  todos: ITodo[];
}

function TodoList({ todos }: IProps) {
  if (!todos.length) {
    return (
      <p>Todo list is empty</p>
    );
  }
  return (
    <>
      { 
        todos.map(({ id, title }) => (
          <p key={id}>{title}</p>
        ))
      }
    </>
  );
};

export default TodoList;
