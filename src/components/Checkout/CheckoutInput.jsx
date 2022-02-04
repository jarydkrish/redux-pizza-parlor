function CheckoutInput({ value, onChange, autoFill, label, description }) {
  const onChangeHandler = event => {
    onChange(event.target.value);
  };
  return (
    <div className="mb-3">
      <label for={autoFill} className="form-label">{label}</label>
      <input type="text" className="form-control" id={autoFill} aria-describedby={autoFill} value={value} onChange={onChangeHandler} />
      {description && <small id={autoFill} className="form-text text-muted">{description}</small>}
    </div>
  );
}

export default CheckoutInput;
