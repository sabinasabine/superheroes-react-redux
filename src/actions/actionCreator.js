import { ADD_CARD, DEL_CARD } from "./constants";

export const addCard = (name, image) => ({
  type: ADD_CARD,
  name,
  image
});

export const delCard = name => ({
  type: DEL_CARD,
  name
});
