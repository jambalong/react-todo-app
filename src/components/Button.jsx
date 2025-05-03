import './Button.css';

function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={className}>
      <span className="button-text">{children}</span>
    </button>
  );
}

export { Button };