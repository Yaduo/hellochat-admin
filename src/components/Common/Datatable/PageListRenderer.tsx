import React from "react";

interface PropsTypes {
  currentPage: number;
  totlaPage: number;
  onPageChange: (nextPage) => void;
}

export const PageListRenderer: React.FC<PropsTypes> = ({
  currentPage,
  totlaPage,
  onPageChange,
}) => {
  // just exclude <, <<, >>, >
  return (
    <div>
      <span style={{ marginRight: 15 }}>
        Page {currentPage} of {totlaPage}
      </span>
      <span className="col-md-6">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            disabled={currentPage == 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={currentPage == totlaPage}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </span>
    </div>
  );
};
