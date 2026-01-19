// Counter state type
export type CounterState = {
  count: number;
  history: number[];
};

// Counter action types
export type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "SET"; payload: number };
