import React from "react";
import PropTypes from "prop-types";
import "./breadcrumb.css";
/**
 * Primary UI component for user interaction
 */

export const Breadcrumb = ({ ...props }) => {
  return (
    <div className="breadcrumb">
      <a className="">Breadcrumb Link</a>
      <a className="">Breadcrumb Link</a>
    </div>
  );
};

Breadcrumb.propTypes = {};

Breadcrumb.defaultProps = {};
