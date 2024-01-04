import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id,
        front,
        back,
      };
    },
  },
  extraReducers: {},
});

export const selectCard = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
