import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onDelete, onClick, completed, text, id }) => (
  <li>
    <span onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}>{text} {id}</span>

    <button onClick={onDelete}>Delete</button>
  </li>
)

Todo.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo