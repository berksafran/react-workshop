"use client";

import { useCart, Product } from "../contexts/CartContext";
import styles from "./cart-demo.module.scss";

const PRODUCTS: Product[] = [
    { id: 1, name: "Mechanical Keyboard", price: 149 },
    { id: 2, name: "Gaming Mouse", price: 89 },
    { id: 3, name: "27\" 4K Monitor", price: 399 },
    { id: 4, name: "USB-C Hub", price: 49 },
    { id: 5, name: "Noise Cancelling Headphones", price: 299 },
];

export function ProductList() {
    const { dispatch } = useCart();

    const addToCart = (product: Product) => {
        dispatch({ type: "ADD_ITEM", payload: product });
    };

    return (
        <div className={styles.productList}>
            <h2>Available Products</h2>
            <div className={styles.productGrid}>
                {PRODUCTS.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <div>
                            <h3>{product.name}</h3>
                            <p className={styles.price}>${product.price}</p>
                        </div>
                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
