import useLocalStorageState from './useLocalStorageState'
import { v4 as uuidv4 } from 'uuid'

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos)
  return {
    todos,
    addTodo: (task) =>
      setTodos([...todos, { id: uuidv4(), task, completed: false }]),
    removeTodo: (id) => setTodos(todos.filter((todo) => todo.id !== id)),
    editTodo: (id, task) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task } : todo)))
    },
    toggleTodo(id) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      )
    },
  }
}
