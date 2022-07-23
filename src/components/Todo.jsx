import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import { Delete, Edit } from '@mui/icons-material'

import useToggleState from '../hooks/useToggleState'

import EditTodoForm from './EditTodoForm'

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggleIsEditing] = useToggleState()

  if (isEditing)
    return (
      <EditTodoForm
        id={id}
        task={task}
        editTodo={editTodo}
        toggleIsEditing={toggleIsEditing}
      />
    )
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        tabIndex={-1}
        onClick={() => toggleTodo(id)}
      />
      <ListItemText style={{ textDecoration: completed && 'line-through' }}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
          <Edit />
        </IconButton>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
