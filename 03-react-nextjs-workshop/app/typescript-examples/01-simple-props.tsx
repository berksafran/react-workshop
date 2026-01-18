/**
 * REACT COMPONENT TİPLERİ - BASIT PROPS
 * Detaylı notlar: NOTES.md
 */

// Basit button component props
type ButtonProps = {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
};

// ❌ ESKİ YÖNTEM
// const Button: React.FC<ButtonProps> = ({ text, onClick, variant, disabled }) => {
//   return <button onClick={onClick}>{text}</button>;
// };

// ✅ YENİ YÖNTEM - Direkt props'a tip ver!
const Button = ({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={variant}
        >
            {text}
        </button>
    );
};

export default Button;
