import './App.css';
import React, { useEffect } from 'react';
import Control from './components/Control';
import CanvasWrapper from './components/CanvasWrapper';
import SocketProvider from './contexts/SocketProvider';
import Socials from './components/Socials';

function App() {
    useEffect(() => {
        console.log('\n\n==================================');
        console.log('Title: BreakingBadxLofiGirl');
        console.log('[Breaking Bad S02E07 ending scene]');
        console.log('==================================\n\n');
        console.log('Made with ♥️ by Zeeshan');
        console.log('Source: https://github.com/ZeeshanZulfiqarAli/muse');
        console.log('LinkedIn: https://www.linkedin.com/in/zeeshandossani/');
    }, []);

    return (
        <SocketProvider>
            <div className="App">
                <CanvasWrapper />
                <Control showOverlayOnStart />
                <Socials />
            </div>
        </SocketProvider>
    );
}

export default App;
