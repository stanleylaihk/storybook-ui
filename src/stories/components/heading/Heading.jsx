import React from "react";
import PropTypes from "prop-types";
import "./heading.css";

/**
 * Primary UI component for user interaction
 */
export const Heading = ({ variant, label, ...props }) => {
  switch (variant) {
    case "h1":
      return <h1 {...props}>{label}</h1>;
      break;

    case "h2":
      return <h2 {...props}>{label}</h2>;
      break;

    case "h3":
      return <h3 {...props}>{label}</h3>;
      break;

    case "h4":
      return <h4 {...props}>{label}</h4>;
      break;

    case "h5":
      return <h5 {...props}>{label}</h5>;
      break;

    case "h6":
      return <h6 {...props}>{label}</h6>;
      break;

    default:
      return <h1 {...props}>{label}</h1>;
      break;
  }
};

Heading.propTypes = {
  /**
   * Heading variant
   */
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  /**
   * Heading contents
   */
  label: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  variant: "h1",
};
