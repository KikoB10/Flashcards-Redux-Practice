import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice.js";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [], //will contain the ids of each quiz associated with the topic
      };
    },
  },

  extraReducers: {
    [addQuiz]: (state, action) => {
      const { id, topicId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(id);
      }
    },
  },
});

//selector of state topics
export const selectTopics = (state) => state.topics.topics;
//export the actions
export const { addTopic } = topicsSlice.actions;
//export the slice reducer
export default topicsSlice.reducer;
