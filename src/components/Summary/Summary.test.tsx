import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Summary from './Summary';

describe('<Summary />', () => {
  test('it should mount', () => {
    render(<Summary />);
    
    const summary = screen.getByTestId('Summary');

    expect(summary).toBeInTheDocument();
  });
});