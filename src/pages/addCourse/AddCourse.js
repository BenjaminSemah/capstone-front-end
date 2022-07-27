import React from 'react';
import { useSelector } from 'react-redux';
import AddCourseForm from '../../components/AddCourseForm';
import './AddCourse.css';

export default function AddCourse() {
  const currentUser = useSelector((state) => state.currentUserr.current);
  const userToken = JSON.parse(localStorage.getItem('userAuth'));
  if (!userToken || !currentUser.admin) {
    return (
      <div className="text-center mt-5">
        <h2 className="text-danger">You Are Not Authorised To Add a Course</h2>
        <h3 className="my-4">Please Log in as Admin</h3>
      </div>
    );
  }
  return (
    <div className="pt-5">
      <div className="newCourse--form">
        <div className="add--course">
          <h1 className="add--title">Add a New Course</h1>
          <AddCourseForm />
        </div>
      </div>
    </div>
  );
}
