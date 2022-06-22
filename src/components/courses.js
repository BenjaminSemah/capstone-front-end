import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-bootstrap';
import CourseItem from './courseItem';

const Courses = ({ courses }) => (
  <Container>
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
          id={id}
          name={name}
          image={image}
          description={description}
        />
      ))}
    </Row>
  </Container>
);

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Courses;
