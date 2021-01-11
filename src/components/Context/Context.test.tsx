import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Context from './Context';

describe('<Context />', () => {
  test('it should mount', () => {
    render(<Context />);

    const context = screen.getByTestId('Context');

    expect(context).toBeInTheDocument();
  });
});
