import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DynamicText from './DynamicText'

describe('<DynamicText />', () => {
    test('it should mount', () => {
        render(<DynamicText />)

        const dynamicText = screen.getByTestId('DynamicText')

        expect(dynamicText).toBeInTheDocument()
    })
})
