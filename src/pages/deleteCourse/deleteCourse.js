import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse } from '../../redux/coursesSlice';
import './deleteCourse.css';

const DeleteCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector(({ course }) => course.courses);
  return (
    <div className="delete-courses pt-4">
      <Container>
        <div className="text-center">
          <h1 className="main-title">Delete Courses</h1>
          <p className="sub-title">Which coure, you need to delete it</p>
        </div>
        <Row className="">
          {courses.map(({ id, name, image }) => (
            <Col key={id} className="text-center my-5" xs={12} md={3}>
              <img
                draggable={false}
                className="rounded-circle home-img"
                src={image}
                alt={name}
              />
              <div>
                <p className="fw-bold">{name.toUpperCase()}</p>
                <button
                  onClick={() => dispatch(deleteCourse(id))}
                  type="button"
                  className="btn btn-outline-dark"
                >
                  Delete
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default DeleteCourse;
