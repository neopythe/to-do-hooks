import { useState } from 'react'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {
  const initialTodos = [
    { id: 1, task: 'Milk the dog', completed: true },
    { id: 1, task: 'Milk the cat', completed: false },
    { id: 1, task: 'Grow a beard', completed: false },
  ]
  const [todos, setTodos] = useState(initialTodos)
  const addTodo = (task) => {
    setTodos([...todos, { id: 4, task, completed: false }])
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
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  )
}
