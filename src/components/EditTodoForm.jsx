import TextField from '@mui/material/TextField'

import useInputState from '../hooks/useInputState'

export default function EditTodoForm({ id, task, editTodo, toggleIsEditing }) {
  const [value, handleChange, reset] = useInputState(task)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        editTodo(id, value)
        reset()
        toggleIsEditing()
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  )
}
