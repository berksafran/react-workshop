'use client';

type ButtonProps = {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
};

const Button = ({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) => {
    const styles = {
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        border: 'none',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        background: variant === 'primary'
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : '#6c757d',
        color: 'white',
        transition: 'all 0.3s ease',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={styles}
        >
            {text}
        </button>
    );
};

export default Button;
