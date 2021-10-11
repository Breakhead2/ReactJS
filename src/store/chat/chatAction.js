export const ADD_CHAT = "ADD CHAT";
export const REMOVE_CHAT = "REMOVE CHAT";

export const chatAddAction = (name) => {
  return {
    type: ADD_CHAT,
    name: name,
  };
};

export const chatRemoveAction = (id) => {
  return {
    type: REMOVE_CHAT,
    id: id,
  };
};
