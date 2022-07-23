import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Checkbox, ListItemSecondaryAction } from '@mui/material'
// import IconButton from '@mui/material'
// import ListItemSecondaryAction from '@mui/material'

export default function Todo({ task, completed }) {
  return (
    <ListItem>
      <Checkbox checked={completed} tabIndex={-1} />
      <ListItemText>{task}</ListItemText>
    </ListItem>
  )
}
