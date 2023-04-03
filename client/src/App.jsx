import './App.css';
import React from 'react';
import Control from './components/Control';
import CanvasWrapper from './components/CanvasWrapper';
import SocketProvider from './contexts/SocketProvider';

// test change
function App() {
    return (
        <SocketProvider>
            <div className="App">
                <CanvasWrapper />
                <Control />
            </div>
        </SocketProvider>
    );
}

export default App;
