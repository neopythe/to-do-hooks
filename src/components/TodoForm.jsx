import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import useInputState from '../hooks/useInputState'

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('')
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          addTodo(value)
          reset()
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="add new to-do"
          fullWidth
        />
      </form>
    </Paper>
  )
}
