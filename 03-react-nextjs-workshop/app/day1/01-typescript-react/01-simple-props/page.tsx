/**
 * REACT COMPONENT TİPLERİ - BASIT PROPS
 * Detaylı notlar: NOTES.md
 * 
 * İki yöntem var: FC<> veya direkt props'a tip verme
 * Bu örnekte Yöntem 2 kullanıyoruz (direkt props'a tip verme)
 */

// Basit button component props
type ButtonProps = {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
};

// YÖNTEM 1: React.FC<Props>
// const Button: React.FC<ButtonProps> = ({ text, onClick, variant, disabled }) => {
//   return <button onClick={onClick}>{text}</button>;
// };

// YÖNTEM 2: Direkt props'a tip ver (Bu workshop'ta bunu kullanıyoruz)
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
