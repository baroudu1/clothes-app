import "./form-input.style.scss";

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  required,
  error,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        {...otherProps}
      />
      {label && (
        <label
          htmlFor={name}
          className={`${value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
};
export default FormInput;
