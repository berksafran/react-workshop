'use client';

import Button from './Button';
import styles from '../../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export function ButtonDemo() {
    return (
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button
                text="Primary Button"
                onClick={() => alert('Primary clicked!')}
                variant="primary"
            />
            <Button
                text="Secondary Button"
                onClick={() => alert('Secondary clicked!')}
                variant="secondary"
            />
            <Button
                text="Disabled Button"
                onClick={() => alert('Should not fire')}
                disabled={true}
            />
        </div>
    );
}
