import { CounterState, CounterAction } from "./types";

// Counter reducer function
export function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1],
      };
    case "RESET":
      return {
        count: 0,
        history: [0],
      };
    case "SET":
      return {
        count: action.payload,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
}
