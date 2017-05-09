import React,{PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({todos,onTodoClick}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape(
      id: PropTypes.number.isRquired,
      completed: PropTypes.bool.isRquired,
      text: PropTypes.string.isRquired
    ).isRquired
  ).isRquired,
  onTodoClick: PropTypes.func.isRquired
}

export default TodoList
