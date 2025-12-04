import {useState} from 'react';
import './App.css';
import YealthGuide from './pages/YealthGuide';
import YealthCalendar from './pages/YealthCalendar';


function App() {
    const [page, setPage] = useState('guide'); //makes initial state guide but looks for other pages when called
        return (
            <div>
                <h1> Yurse: Your own Nurse at Yale</h1>
                <nav style={{ padding: '20px', backgroundColor: '#eee', marginBottom: '20px' }}>
                    <button onClick={() => setPage('guide')}> Guide </button>
                    <button onClick={() => setPage('calendar')}> Calendar </button>
                </nav>
                {page === 'guide' ? <YealthGuide /> : <YealthCalendar />}
           
        
            </div>
        );
    }

    export default App;