import { memo } from "react";
import "./button.style.scss";

const Button = memo(
  ({
    children,
    onClick,
    buttonType,
    type = "button",
    disabled = false,
    ...props
  }) => {
    const BUTTON_TYPES_CLASSES = {
      google: "google-sign-in",
      inverted: "inverted",
    };

    return (
      <button
        className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
export default Button;
