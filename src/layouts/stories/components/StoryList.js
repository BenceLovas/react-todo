import React from 'react';
import PropTypes from 'prop-types';

import Story from './Story';

import Grow from '@material-ui/core/Grow';

const StoryList = ({ stories }) => (
  <div>
    {stories.map((story, index) => (
      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        timeout={(index + 1) * 300}
        key={story.id}
      >
        <div>
          <Story key={story.id} {...story} />
        </div>
      </Grow>
    ))}
  </div>
)

StoryList.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

export default StoryList;