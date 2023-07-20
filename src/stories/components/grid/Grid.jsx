import React from "react";
import PropTypes from "prop-types";
import "./grid.css";
/**
 * Primary UI component for user interaction
 */

export const Grid = ({ device, ...props }) => {
  let col = 12;
  switch (device) {
    case "desktop":
      col = 12;
      break;
    case "tablet":
      col = 8;
      break;
    case "mobile":
      col = 6;
      break;

    default:
      break;
  }

  return (
    <div className={`container container-${device}`}>
      <div className="row">
        {[...Array(col)].map((x, i) => (
          <div className="col"></div>
        ))}
      </div>
    </div>
  );
};

Grid.propTypes = {
  device: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};

Grid.defaultProps = {
  device: "desktop",
};
