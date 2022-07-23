import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import { Delete, Edit } from '@mui/icons-material'

export default function Todo({ task, completed }) {
  return (
    <ListItem>
      <Checkbox checked={completed} tabIndex={-1} />
      <ListItemText style={{ textDecoration: completed && 'line-through' }}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit">
          <Edit />
        </IconButton>
        <IconButton aria-label="Delete">
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
