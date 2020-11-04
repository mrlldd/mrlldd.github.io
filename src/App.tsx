import React from 'react'
import './App.css'
import BackgroundCanvas from './components/BackgroundCanvas/BackgroundCanvas'
import Summary from './components/Summary/Summary'

function App() {
    return (
        <div className="App">
            <BackgroundCanvas />
            <Summary />
        </div>
    )
}

export default App
