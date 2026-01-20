"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";

// 1. Tip Tanımları
export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    total: number;
}

// Action Types
type CartAction =
    | { type: "ADD_ITEM"; payload: Product }
    | { type: "REMOVE_ITEM"; payload: number } // id
    | { type: "CLEAR_CART" };

// 2. Initial State
const initialState: CartState = {
    items: [],
    total: 0,
};

// 3. Reducer Fonksiyonu
function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM": {
            // Ürün zaten sepette mi?
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            let newItems;
            if (existingItemIndex > -1) {
                // Varsa miktar artır
                newItems = state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Yoksa ekle
                newItems = [...state.items, { ...action.payload, quantity: 1 }];
            }

            return {
                items: newItems,
                total: state.total + action.payload.price,
            };
        }

        case "REMOVE_ITEM": {
            const itemToRemove = state.items.find((item) => item.id === action.payload);
            if (!itemToRemove) return state;

            const newItems = state.items.filter((item) => item.id !== action.payload);

            return {
                items: newItems,
                total: state.total - itemToRemove.price * itemToRemove.quantity,
            };
        }

        case "CLEAR_CART":
            return initialState;

        default:
            return state;
    }
}

// 4. Context Oluşturma
interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// 5. Provider Bileşeni
export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

// 6. Custom Hook
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
