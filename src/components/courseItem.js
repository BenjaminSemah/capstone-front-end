import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const CourseItem = ({
  name, description, image, id,
}) => (
  <Col className="text-center" xs={12} md={4}>
    <Link to={`/details/${id}`} style={{ textDecoration: 'none', color: '#97bf0f' }}>
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
    </Link>
  </Col>
);

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CourseItem;
