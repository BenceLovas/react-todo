// action types
export const ADD_STORY = 'ADD_STORY';

// action creators
let nextStoryId = 100

export const addStory = text => ({
  type: ADD_STORY,
  id: nextStoryId++,
  text
})
