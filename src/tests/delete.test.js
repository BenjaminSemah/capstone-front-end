import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DeleteCourse from '../pages/deleteCourse/deleteCourse';
import store from '../redux/store';

describe('homepage', () => {
  const home = (
    <Provider store={store}>
      <BrowserRouter>
        <DeleteCourse />
      </BrowserRouter>
    </Provider>
  );

  it('it should display Delete courses', async () => {
    render(home);
    expect(
      screen.queryByText('Delete Courses'),
    ).toBeInTheDocument();
  });
});
