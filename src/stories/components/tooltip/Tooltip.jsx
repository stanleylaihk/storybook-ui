import React from "react";
import PropTypes from "prop-types";
import "./tooltip.css";
import { AlertCircle } from "lucide-react";
/**
 * Primary UI component for user interaction
 */

export const Tooltip = ({ placement, ...props }) => {
  return (
    <div className={`tooltip tooltip-${placement}`}>
      <div className="tooltip-icon">
        <AlertCircle />
      </div>
      <div className="tooltip-header">New Feature</div>
      <div className="tooltip-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  /**
   * Placement direction
   */
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

Tooltip.defaultProps = {
  placement: 10,
};
