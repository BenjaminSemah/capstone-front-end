import React from 'react';
import AddCourseForm from '../../components/AddCourseForm';
import './AddCourse.css';

export default function AddCourse() {
  return (
    <div className="newCourse--form">
      <div className="add--course">
        <h1 className="add--title">Add a New Course</h1>
        <AddCourseForm />
      </div>
    </div>
  );
}
