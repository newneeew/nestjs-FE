

interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
            {text}
        </button>
    );
};

export default Button;
