import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../redux/coursesSlice';

export default function AddCourseForm() {
  const dispatch = useDispatch();

  const [courseData, setCourseData] = useState(
    {
      name: '',
      description: '',
      location: '',
      size: '',
      price: '',
      image: '',
    },
  );

  const handleFormChange = (event) => {
    setCourseData((prevData) => {
      const { name, value } = event.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addCourse(courseData));
  };

  return (
    <>
      <form
        className="addCourse--form"
        onSubmit={handleFormSubmit}
      >
        <input
          className="form--input"
          type="text"
          placeholder="Name of course"
          name="name"
          onChange={handleFormChange}
          value={courseData.name}
        />
        <textarea
          className="form--input form--desc"
          placeholder="Description"
          name="description"
          onChange={handleFormChange}
          value={courseData.description}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleFormChange}
          value={courseData.location}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Size"
          name="size"
          onChange={handleFormChange}
          value={courseData.size}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Price"
          name="price"
          onChange={handleFormChange}
          value={courseData.price}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Image url"
          name="image"
          onChange={handleFormChange}
          value={courseData.image}
        />
        <button
          className="submit--btn"
          type="submit"
        >
          Add New Course
        </button>
      </form>
    </>
  );
}
