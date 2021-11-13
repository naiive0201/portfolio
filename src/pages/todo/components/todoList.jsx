import React from 'react';
import TodoItem from './todoItem';

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <TodoItem key={todo.name} todo={todo} />;
      })}
    </ul>
  );
}
