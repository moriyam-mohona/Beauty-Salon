const Button = ({ label, onClick, className, type = "button" }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`btn btn-secondary px-8 font-normal bg-pink-500 text-md ${className}`}
        type={type}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
