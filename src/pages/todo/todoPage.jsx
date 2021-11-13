import React, { useEffect, useState } from 'react';
import TodoList from './components/todoList';
import todoData from '../../data/todoData';

export default function TodoPage() {
  const [dailyTodos, setDailyTodos] = useState([]);

  useEffect(() => {
    setDailyTodos(todoData);
  }, [dailyTodos]);

  // getting todo item
  return (
    <main className="h-screen mt-12">
      <section className="p-6">
        {dailyTodos.map((dailyTodo, index) => {
          return (
            <article key={dailyTodo.id}>
              <h2>{dailyTodo.date}</h2>
              <TodoList todos={dailyTodo.todos} />
            </article>
          );
        })}
      </section>
    </main>
  );
}
