import './Input.css';

function Input ({ value, onChange, placeholder, onKeyDown, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className={className}
    />
  );
}

export { Input };