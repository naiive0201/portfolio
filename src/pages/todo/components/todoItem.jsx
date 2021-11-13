import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <li className="flex flex-row items-center justify-between ">
      <div className="px-4">
        <input type="checkbox" name="" />
      </div>
      <div className="flex flex-1">
        <p>{todo.name}</p>
      </div>
      <div>
        <p>{todo.memo}</p>
      </div>
    </li>
  );
}
