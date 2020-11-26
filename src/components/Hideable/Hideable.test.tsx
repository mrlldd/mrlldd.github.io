import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Hideable from './Hideable'

describe('<Hideable />', () => {
    test('it should mount', () => {
        render(<Hideable />)

        const hideable = screen.getByTestId('Hideable')

        expect(hideable).toBeInTheDocument()
    })
})
