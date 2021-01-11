import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BackgroundCanvas from './BackgroundCanvas';

describe('<BackgroundCanvas />', () => {
  test('it should mount', () => {
    render(<BackgroundCanvas />);

    const backgroundCanvas = screen.getByTestId('BackgroundCanvas');

    expect(backgroundCanvas).toBeInTheDocument();
  });
});
