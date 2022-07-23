import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) ?? []
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (task) =>
    setTodos([...todos, { id: uuidv4(), task, completed: false }])

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id))

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const editTodo = (id, task) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task } : todo)))
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">to-dos with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        style={{ marginTop: '1rem' }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          {todos.length > 0 && (
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}
