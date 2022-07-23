import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'

import Todo from './Todo'
import React from 'react'

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            <Todo
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {index < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  )
}
