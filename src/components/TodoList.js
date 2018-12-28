import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';

const TodoList = ({ todos, toggleTodo }) => (
  <div>
    <Fade in={true} timeout={1300}>
      <h2>PROJECTS</h2>
    </Fade>
    {todos.map((todo, index) => (
      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        timeout={(index + 1) * 300}
        key={todo.id}
      >
        <div>
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        </div>
      </Grow>
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList