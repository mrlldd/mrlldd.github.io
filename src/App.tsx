import React from 'react'
import './App.css'
import BackgroundCanvas from './components/BackgroundCanvas/BackgroundCanvas'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
    return (
        <div className="App">
            <BackgroundCanvas />
            <Dashboard />
        </div>
    )
}

export default App
