import React from 'react';
import { BiSolidFileJson } from 'react-icons/bi';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { FiPrinter } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="d-flex align-items-center justify-content-between" style={{ marginTop: "10px" }}>
      <div className="d-flex align-items-center" style={{ gap: "8px" }}>
        <Link
          className="btn btn-primary btn-sm"
          to=""
          role="button"
          aria-controls="offcanvasExample"
          aria-label="Print"
        >
          <FiPrinter /> Print
        </Link>
        <Link
          className="btn btn-primary btn-sm"
          to=""
          role="button"
          aria-controls="offcanvasExample"
          aria-label="Export PDF"
        >
          <FaFilePdf /> PDF
        </Link>
        <Link
          className="btn btn-primary btn-sm"
          to=""
          role="button"
          aria-controls="offcanvasExample"
          aria-label="Export JSON"
        >
          <BiSolidFileJson /> JSON
        </Link>
        <Link
          className="btn btn-primary btn-sm"
          to=""
          role="button"
          aria-controls="offcanvasExample"
          aria-label="Export Excel"
        >
          <FaFileExcel /> Excel
        </Link>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        style={{ maxWidth: "200px" }}
      />
    </div>
  );
}

export default Header;
