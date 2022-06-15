import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const CourseItem = ({ name, description, image }) => (
  <Col className="text-center" xs={12} md={4}>
    <img
      draggable={false}
      className="rounded-circle home-img"
      src={image}
      alt={name}
    />
    <div>
      <p className="fw-bold">{name.toUpperCase()}</p>
      <p>{description}</p>
    </div>
  </Col>
);

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CourseItem;
