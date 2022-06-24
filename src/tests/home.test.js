import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import store from '../redux/store';

describe('homepage', () => {
  const home = (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );

  it('it should display Latest courses', async () => {
    render(home);
    expect(
      screen.queryByText('LATEST COURSES'),
    ).toBeInTheDocument();
  });
});
