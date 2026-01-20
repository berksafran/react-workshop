import { Link } from 'react-router-dom';
import styles from '../dynamic.module.scss';

// Mock product data
const products = [
    { id: 1, name: 'Kablosuz Kulaklık', price: 299, category: 'Elektronik', emoji: '🎧' },
    { id: 2, name: 'Akıllı Saat', price: 1299, category: 'Elektronik', emoji: '⌚' },
    { id: 3, name: 'Laptop Çantası', price: 199, category: 'Aksesuar', emoji: '💼' },
    { id: 4, name: 'Mekanik Klavye', price: 599, category: 'Elektronik', emoji: '⌨️' },
    { id: 5, name: 'Wireless Mouse', price: 149, category: 'Elektronik', emoji: '🖱️' },
    { id: 6, name: 'USB-C Hub', price: 249, category: 'Aksesuar', emoji: '🔌' },
];

export function ProductList() {
    return (
        <div className={styles.productList}>
            <h2>Ürünler</h2>
            <div className={styles.grid}>
                {products.map((product) => (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className={styles.productCard}
                    >
                        <div className={styles.productImage}>
                            {product.emoji}
                        </div>
                        <h3>{product.name}</h3>
                        <div className={styles.price}>{product.price} ₺</div>
                        <span className={styles.category}>{product.category}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export { products };
