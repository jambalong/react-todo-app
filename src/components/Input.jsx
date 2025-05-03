function Input ({ value, onChange, placeholder, onKeyDown }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
}

export { Input };