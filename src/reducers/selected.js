import { ADD_CARD, DEL_CARD } from "../actions/constants";

const selected = [];

const selectCards = (state = selected, { name, image, type }) => {
  switch (type) {
    case ADD_CARD:
      const addedCard = { name, image };
      const existed = state.find(card => card.name === name);

      if (existed === undefined) {
        addedCard.count = 1;
        return [...state, addedCard];
      } else {
        existed.count += 1;
        const index = state.findIndex(card => card.name === name);
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            existed
          },
          ...state.slice(index + 1)
        ];
      }
    case DEL_CARD:
      return [...state].filter(card => card.name !== name);
    default:
      return state;
  }
};

export default selectCards;
