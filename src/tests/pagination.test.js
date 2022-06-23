import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Pagination from '../components/pagination';
import store from '../redux/store';

describe('homepage', () => {
  const home = (
    <Provider store={store}>
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>
    </Provider>
  );

  it('test pagination component', () => {
    const tree = render(home);
    expect(tree).toMatchSnapshot();
  });
});
