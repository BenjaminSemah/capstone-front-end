import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import CourseItem from '../components/courseItem';

describe('Courses', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><CourseItem /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
