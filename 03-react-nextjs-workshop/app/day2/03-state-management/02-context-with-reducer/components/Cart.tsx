"use client";

import { useCart } from "../contexts/CartContext";
import styles from "./cart-demo.module.scss";

export function Cart() {
    const { state, dispatch } = useCart();

    const removeFromCart = (id: number) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    return (
        <div className={styles.cart}>
            <h2>Shopping Cart</h2>

            {state.items.length === 0 ? (
                <div className={styles.emptyCart}>Your cart is empty</div>
            ) : (
                <>
                    <div className={styles.cartItems}>
                        {state.items.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <div className={styles.itemInfo}>
                                    <h4>{item.name}</h4>
                                    <p>
                                        ${item.price} x {item.quantity}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className={styles.removeButton}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cartSummary}>
                        <div className={styles.total}>
                            <span>Total:</span>
                            <span>${state.total.toFixed(2)}</span>
                        </div>
                        <button onClick={clearCart} className={styles.clearButton}>
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
