import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, isShow: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increase") {
    return {
      counter: state.counter + 1,
      isShow: state.isShow,
    };
  }
  if (action.type === "decrease") {
    return {
      counter: state.counter - 1,
      isShow: state.isShow,
    };
  }
  if (action.type === "increaseby5") {
    return {
      counter: state.counter + action.amount,
      isShow: state.isShow,
    };
  }
  if (action.type === "toggleHandler") {
    return {
      counter: state.counter,
      isShow: !state.isShow,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
