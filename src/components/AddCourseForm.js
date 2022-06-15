import React, { useState } from 'react';

export default function AddCourseForm() {
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
    console.log(courseData);
  };

  return (
    <>
      <p>This is the form</p>
      <form
        className="addCourse--form"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder="name of course"
          name="name"
          onChange={handleFormChange}
          value={courseData.name}
        />
        <textarea
          placeholder="description"
          name="description"
          onChange={handleFormChange}
          value={courseData.description}
        />
        <input
          type="text"
          placeholder="location"
          name="location"
          onChange={handleFormChange}
          value={courseData.location}
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          onChange={handleFormChange}
          value={courseData.size}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={handleFormChange}
          value={courseData.price}
        />
        <input
          type="text"
          placeholder="image url"
          name="image"
          onChange={handleFormChange}
          value={courseData.image}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}
