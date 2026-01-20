import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { CartProvider } from './contexts/CartContext';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import styles from './components/cart-demo.module.scss'; // Stilleri tekrar kullanabiliriz

export default async function ContextWithReducerPage() {
    const notesPath = path.join(process.cwd(), 'app/day2/03-state-management/02-context-with-reducer/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Context API + useReducer"
            description="Gelişmiş state yönetimi: Shopping Cart örneği"
            notesContent={notesContent}
        >
            <CartProvider>
                <div className={styles.container}>
                    <ProductList />
                    <Cart />
                </div>
            </CartProvider>
        </PageContainer>
    );
}
