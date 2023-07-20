import React from "react";
import PropTypes from "prop-types";
import "./pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
/**
 * Primary UI component for user interaction
 */

export const Pagination = ({ pages, currentPage, ...props }) => {
  return (
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link">
            <ChevronLeft strokeWidth={1.5} />
          </a>
        </li>
        {[...Array(pages)].map((x, i) => (
          <li key={i} class="page-item">
            <a
              class={`page-link ${i + 1 == currentPage ? "active" : ""}`}
              href="#"
            >
              {i + 1}
            </a>
          </li>
        ))}
        <li class="page-item">
          <a class="page-link">
            <ChevronRight strokeWidth={1.5} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  /**
   * How many pages?
   */
  pages: PropTypes.number,
  /**
   * Current page
   */
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  pages: 10,
  currentPage: 2,
};
