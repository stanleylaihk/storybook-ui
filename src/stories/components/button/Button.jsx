import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Fish } from "lucide-react";
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  style,
  iconStatus,
  size,
  label,
  isDisable,
  ...props
}) => {
  const icon = <Fish strokeWidth={1.5} />;
  return (
    <button
      type="button"
      className={`btn btn-${style} btn-${size} ${
        iconStatus === "only icon" ? "btn-icon" : ""
      }`}
      disabled={isDisable && true}
      {...props}
    >
      {iconStatus === "left icon" ? icon : ""}
      {iconStatus === "only icon" ? icon : label}
      {iconStatus === "right icon" ? icon : ""}
    </button>
  );
};

Button.propTypes = {
  varient: PropTypes.oneOf(["primary"]),
  style: PropTypes.oneOf(["solid", "outline", "text"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  iconStatus: PropTypes.oneOf([
    "left icon",
    "right icon",
    "only icon",
    "no icon",
  ]),
  label: PropTypes.string.isRequired,
  isDisable: PropTypes.bool,
};

Button.defaultProps = {
  style: "primary",
  style: "solid",
  size: "sm",
  iconStatus: "left icon",
  label: "Button",
  isDisable: false,
};
