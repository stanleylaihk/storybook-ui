import React from "react";
import PropTypes from "prop-types";
import "./badge.css";
/**
 * Primary UI component for user interaction
 */

export const Badge = ({ varient, label, ...props }) => {
  return (
    <div className={`badge badge-${varient}`} {...props}>
      {label}
    </div>
  );
};

Badge.propTypes = {
  /**
   * Varient
   */
  varient: PropTypes.oneOf(["primary", "success", "warning", "error"]),
  /**
   * Text
   */
  label: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  varient: "primary",
};
