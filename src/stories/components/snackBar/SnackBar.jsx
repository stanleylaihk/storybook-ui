import React from "react";
import PropTypes from "prop-types";
import "./snackBar.css";
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  XCircle,
  X,
} from "lucide-react";
/**
 * Primary UI component for user interaction
 */
export const SnackBar = ({ varient, ...props }) => {
  let icon = <CheckCircle2 />;

  switch (varient) {
    case "success":
      icon = <CheckCircle2 />;
      break;

    case "warning":
      icon = <AlertCircle />;
      break;

    case "error":
      icon = <XCircle />;
      break;

    case "information":
      icon = <HelpCircle />;
      break;

    default:
      icon = <CheckCircle2 />;
      break;
  }

  return (
    <div className={`snackBar snackBar-${varient}`}>
      <div className="snackBar-icon">{icon}</div>
      <div className="snackBar-body">
        <div className="snackBar-header">{varient}</div>
        <div className="snackBar-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>
      <div className="snackBar-close">
        <X />
      </div>
    </div>
  );
};

SnackBar.propTypes = {
  /**
   * Varient
   */
  varient: PropTypes.oneOf(["success", "warning", "error", "information"]),
};

SnackBar.defaultProps = {
  varient: "success",
};
