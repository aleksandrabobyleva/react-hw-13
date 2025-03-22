const SET_FILTER = "SET_FILTER";

const initialState = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "Emily" },
    { id: 3, name: "Michael" },
    { id: 4, name: "Sarah" },
    { id: 5, name: "David" },
    { id: 6, name: "Jessica" },
    { id: 7, name: "James" },
    { id: 8, name: "Ashley" },
    { id: 9, name: "Robert" },
    { id: 10, name: "Sophia" },
  ],
  filter: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
