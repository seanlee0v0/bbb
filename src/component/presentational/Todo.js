import React,{PropTypes} from 'React'


const Todo = ({onClick,completed,text}) => (
  <li
    onClick={onClick
    style={{
      textDecoration: completed?'line-through':'none'
    }}
  >
    {text}
  </li>
)
Todo.propTypes = {
  onClick: PropTypes.func.isRquired,
  completed: PropTypes.bool.isRquired,
  text: PropTypes.string.isRquired
}

export default Todo
