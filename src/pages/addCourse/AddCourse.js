import React from 'react';
import { useSelector } from 'react-redux';
import AddCourseForm from '../../components/AddCourseForm';
import './AddCourse.css';

export default function AddCourse() {
  const currentUser = useSelector((state) => state.currentUserr.current);

  return (
    <>
      {!currentUser.admin ? (
        <h2>you are not authorized</h2>
      ) : (
        <div className="newCourse--form">
          <div className="add--course">
            <h1 className="add--title">Add a New Course</h1>
            <AddCourseForm />
          </div>
        </div>
      )}
    </>
  );
}
