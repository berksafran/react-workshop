import { useParams, Link } from 'react-router-dom';
import { products } from './ProductList';
import styles from '../dynamic.module.scss';

export function ProductDetail() {
    // URL'deki :id parametresini okuyoruz
    const { id } = useParams();

    // String olan id'yi number'a çeviriyoruz
    const productId = Number(id);

    // Ürünü buluyoruz
    const product = products.find(p => p.id === productId);

    // Ürün bulunamadıysa
    if (!product) {
        return (
            <div className={styles.notFound}>
                <div className={styles.icon}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2>Ürün Bulunamadı</h2>
                <p>ID: {id} olan ürün mevcut değil.</p>
                <Link to="/products" className={styles.backButton}>
                    ← Ürünlere Dön
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.productDetail}>
            <Link to="/products" className={styles.backButton}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Geri Dön
            </Link>

            <div className={styles.detailContent}>
                <div className={styles.imageSection}>
                    <div className={styles.productImage}>
                        {product.emoji}
                    </div>
                </div>

                <div className={styles.infoSection}>
                    <h1>{product.name}</h1>
                    <div className={styles.price}>{product.price} ₺</div>
                    <span className={styles.category}>{product.category}</span>

                    <p className={styles.description}>
                        Bu ürün hakkında detaylı açıklama buraya gelecek.
                        URL parametresi olarak gelen ID: <strong>{id}</strong>
                    </p>

                    <button className={styles.addToCartButton}>
                        Sepete Ekle
                    </button>
                </div>
            </div>
        </div>
    );
}
