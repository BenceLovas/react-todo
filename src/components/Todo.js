import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

const Todo = ({ onClick, completed, text }) => (
    <Paper
        onClick={onClick}
        elevation={1}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            padding: '1rem',
            marginBottom: '0.2rem'
,        }}
    >
        {text}
    </Paper>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Todo;