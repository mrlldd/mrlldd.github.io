import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    test('it should mount', () => {
        render(<Dashboard />)

        const summary = screen.getByTestId('Dashboard')

        expect(summary).toBeInTheDocument()
    })
})
