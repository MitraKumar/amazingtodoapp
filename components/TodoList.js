import React, { useState } from 'react';

import { useTodoValue } from '../contexts/TodoContext'

import Todo from './Todo'

export default function TodoList() {

  const [ { todos }, dispatch ] = useTodoValue()

  return (
    <div>
      {
        todos.map(todo => 
          <Todo 
            key={todo.id}
            todo={todo}
            onClick={id => dispatch({type: 'toggle-complete', payload: id})}
            onDelete={id => dispatch({type: 'delete', payload: id})}
          />)
      }
    </div>
  )
}