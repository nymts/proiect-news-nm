import React from "react";
import BootstrapPagination from "react-bootstrap/Pagination";
import styles from "./Pagination.module.css";

function Pagination(props) {
  const { currentPage, onPageChange } = props;


  const handlePageClick = (page) => {
    onPageChange(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <BootstrapPagination.Item
          key={number}
          active={number === currentPage}
          id={number === currentPage ? styles.paginationActive : null}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </BootstrapPagination.Item>
      );
    }
    return items;
  };

  return (
    <div className="d-flex justify-content-center">
      <BootstrapPagination className={styles.pagination}>
        {renderPaginationItems()}
      </BootstrapPagination>
    </div>
  );
}

export default Pagination;
