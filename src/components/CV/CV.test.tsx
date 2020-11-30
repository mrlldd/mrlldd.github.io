import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CV from './CV'

describe('<CV />', () => {
    test('it should mount', () => {
        render(<CV />)

        const cv = screen.getByTestId('CV')

        expect(cv).toBeInTheDocument()
    })
})
