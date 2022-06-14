import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Courses from './courses';

const Pagination = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const data = useSelector(({ course }) => course.courses);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i += 1) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
  };
  return (
    <div className="pagination">
      <Courses courses={currentItems} />

      <button
        className="home-next-btn pagination-btn"
        type="button"
        onClick={handlePrevbtn}
        disabled={currentPage === pages[0]}
      >
        <img
          src="https://www.svgrepo.com/show/310609/caret-left.svg"
          alt="left"
        />
      </button>

      <button
        className=" home-prev-btn pagination-btn "
        type="button"
        onClick={handleNextbtn}
        disabled={currentPage === pages[pages.length - 1]}
      >
        <img
          src="https://www.svgrepo.com/show/310612/caret-right.svg"
          alt="left"
        />
      </button>
    </div>
  );
};

export default Pagination;
