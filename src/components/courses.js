import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import CourseItem from './courseItem';

const Courses = ({ courses }) => (
  <>
    <div className="text-center">
      <h1 className="main-title">LATEST COURSES</h1>
      <p>Please select your Course</p>
    </div>
    <Row className="pt-5">
      {courses.map(({
        id, name, description, image,
      }) => (
        <CourseItem
          key={id}
          name={name}
          image={image}
          description={description}
        />
      ))}
    </Row>
  </>
);

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Courses;
