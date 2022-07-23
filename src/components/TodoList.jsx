import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'

import Todo from './Todo'

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {index < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  )
}
