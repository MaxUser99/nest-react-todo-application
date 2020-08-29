import React from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { useTodos } from '../../hooks/useTodos';
import './app.css';
import TodoList from '../TodoList/TodoList';
import AddTodoForm from '../AddTodoForm/AddTodoForm';

function App() {
  const { todos: { data, isLoading }, setTodos } = useTodos();

  return (
    <Container className='root' fluid>
      <h1>Todo application </h1>

      <div className="d-flex flex-column border-bottom border-top py-3">
        {isLoading && <Spinner color='primary' />}
        {Array.isArray(data) && <TodoList todos={data} />}
      </div>

      <AddTodoForm disabled={isLoading} />
    </Container>
  );
}

export default App;
