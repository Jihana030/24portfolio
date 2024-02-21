function Button({ children, onClick, color = "blue" }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
