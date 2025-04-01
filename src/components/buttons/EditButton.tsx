interface EditButtonProps {
  onClick: () => void;
  className?: string;
}

const EditButton = ({ onClick, className = '' }: EditButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-200 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    </button>
  );
};

export default EditButton; 