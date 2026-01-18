# useReducer - Detaylı Notlar

⚠️ **Kod örnekleri için `components/ReducerDemo.tsx` dosyasına bakın.**

## Genel Bakış

useReducer, useState'e alternatif bir hook'tur. Complex state logic için kullanılır. Redux pattern'i ile aynı mantıktır.

---

## Temel Kullanım

### Syntax

```typescript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state`: Mevcut state
- `dispatch`: Action göndermek için fonksiyon
- `reducer`: State'i güncelleyen fonksiyon
- `initialState`: Başlangıç state'i

### Reducer Function

```typescript
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

⚠️ **Önemli:** Reducer pure function olmalı! Side effect yok, aynı input → aynı output.

**Detay için:** `components/ReducerDemo.tsx` → `ReducerBasicDemo`

---

## useState vs useReducer

### useState Kullan:

- ✅ Basit state (string, number, boolean)
- ✅ Birkaç state değişkeni
- ✅ State logic basit

### useReducer Kullan:

- ✅ Complex state (nested objects, arrays)
- ✅ Birden fazla sub-value
- ✅ State logic karmaşık
- ✅ Next state, previous state'e bağlı
- ✅ Redux benzeri pattern istiyorsan

---

## TypeScript ile useReducer

### State ve Action Types

```typescript
// State type
type CounterState = {
  count: number;
  history: number[];
};

// Action types (discriminated union)
type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET"; payload: number };

// Reducer
function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET":
      return { ...state, count: action.payload };
    default:
      return state;
  }
}
```

⚠️ **Önemli:** Discriminated union kullan! TypeScript action.payload'u otomatik anlasın.

---

## Redux Pattern

### Actions

```typescript
// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators (optional)
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Dispatch
dispatch(increment());
```

### Reducer

```typescript
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

⚠️ **Önemli:** Redux'tan farkı: Middleware yok, global state yok (Context ile yapılabilir).

---

## Complex State Management

### Todo List Örneği

```typescript
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
  filter: "all" | "active" | "completed";
};

type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "SET_FILTER"; payload: "all" | "active" | "completed" };

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    // ...
  }
}
```

**Detay için:** `components/ReducerDemo.tsx` → `TodoReducerDemo`

---

## Context ile Birlikte

Global state management için:

```typescript
// Context oluştur
const TodoContext = createContext<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
} | null>(null);

// Provider
function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook
function useTodos() {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodos must be used within TodoProvider');
  return context;
}

// Kullanım
function TodoList() {
  const { state, dispatch } = useTodos();
  // ...
}
```

⚠️ **Önemli:** Context + useReducer = Mini Redux!

---

## Lazy Initialization

Pahalı initial state için:

```typescript
function init(initialCount: number) {
  return { count: initialCount, history: [initialCount] };
}

const [state, dispatch] = useReducer(reducer, initialCount, init);
```

---

## Best Practices

### ✅ Yapılması Gerekenler

1. **Immutability** → Spread operator kullan
2. **TypeScript** → Action ve state için type tanımla
3. **Pure reducer** → Side effect yok
4. **Default case** → Her zaman state döndür
5. **Action types** → Constant olarak tanımla

### ❌ Yapılmaması Gerekenler

1. **State'i direkt değiştirme** → `state.count++` ❌
2. **Side effects** → API call, timer reducer'da ❌
3. **Async logic** → Reducer sync olmalı
4. **Default case unutma** → Her zaman ekle

---

## Yaygın Hatalar

### 1. State'i Mutate Etmek

```typescript
// ❌ Yanlış
function reducer(state, action) {
  state.count++; // Mutate!
  return state;
}

// ✅ Doğru
function reducer(state, action) {
  return { ...state, count: state.count + 1 };
}
```

### 2. Async Logic

```typescript
// ❌ Yanlış
function reducer(state, action) {
  fetch("/api/data"); // Async!
  return state;
}

// ✅ Doğru - useEffect'te yap
useEffect(() => {
  fetch("/api/data").then((data) => {
    dispatch({ type: "SET_DATA", payload: data });
  });
}, []);
```

### 3. Default Case Unutmak

```typescript
// ❌ Yanlış
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    // Default yok!
  }
}

// ✅ Doğru
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state; // Her zaman ekle!
  }
}
```

---

## useReducer vs Redux

| Özellik        | useReducer        | Redux             |
| -------------- | ----------------- | ----------------- |
| Scope          | Component/Context | Global            |
| Middleware     | Yok               | Var (thunk, saga) |
| DevTools       | Yok               | Var               |
| Boilerplate    | Az                | Çok               |
| Learning Curve | Kolay             | Zor               |

⚠️ **Önemli:** Basit projeler için useReducer + Context yeterli!

---

## Sık Sorulan Sorular

1. **Soru:** useState vs useReducer ne zaman?
   **Cevap:** Basit state → useState, complex → useReducer

2. **Soru:** Redux yerine useReducer kullanabilir miyim?
   **Cevap:** Basit projeler için evet, complex için Redux daha iyi

3. **Soru:** Reducer'da async işlem yapabilir miyim?
   **Cevap:** Hayır! useEffect'te yap, sonra dispatch et

4. **Soru:** Context + useReducer = Redux mi?
   **Cevap:** Benzer ama middleware, devtools yok

---

## Ek Kaynaklar

- [React - useReducer](https://react.dev/reference/react/useReducer)
- [React - Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [Redux - Core Concepts](https://redux.js.org/introduction/core-concepts)
