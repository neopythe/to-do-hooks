import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'

import Todo from './Todo'

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <Todo key={todo.id} task={todo.task} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}
