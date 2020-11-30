import React from 'react'
import { useHistory } from 'react-router-dom'
import './CV.css'

const CV: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <div onClick={history.goBack} className="back-button">
                <span>{'<|'}</span>
            </div>
            <div className="CV" data-testid="CV">
                CV Component
            </div>
        </>
    )
}

export default CV
