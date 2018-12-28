import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

const Story = ({ text }) => (
    <Paper
        elevation={1}
        style={{
            padding: '1rem',
            marginBottom: '0.2rem',
        }}
    >
        {text}
    </Paper>
)

Story.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Story;