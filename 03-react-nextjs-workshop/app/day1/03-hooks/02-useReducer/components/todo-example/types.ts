// Todo item type
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Todo state type
export type TodoState = {
  todos: Todo[];
  filter: "all" | "active" | "completed";
};

// Todo action types
export type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "SET_FILTER"; payload: "all" | "active" | "completed" };
