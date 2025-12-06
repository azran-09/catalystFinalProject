import { useState } from 'react';
import './YealthCalendar.css';

function YealthCalendar() {
    /*const days = Array.from({ length: 30 }, (_, i) => i + 1);*/
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [availableTypes, setAvailableTypes] = useState([
    { name: 'General', color: '#f0f0f0' },
    { name: 'Medical', color: '#ffcdd2' }, 
    { name: 'Vaccine', color: '#c8d3e6' },
    { name: 'Dentist', color: '#c8e6c9' } 
  ] );

    const [newTypeName, setNewTypeName] = useState('');
    const [newTypeColor, setNewTypeColor] = useState('#add8e6');

    const [events, setEvents] = useState({});
    const [currentDate, setCurrentDate] = useState(new Date());

    const addCustomType = () => {
    if (newTypeName) {
      setAvailableTypes([...availableTypes, { name: newTypeName, color: newTypeColor }]);
      setNewTypeName(''); // Clear input
    }
  };

  const addEventToDay = (dayNumber, text, typeColor) => {
    if (!text) return;

    const dateKey = getDateKey(dayNumber);
    
    setEvents(prev => {
      const dayEvents = prev[dateKey] || [];
      return {
        ...prev,
        [dateKey]: [...dayEvents, { text, color: typeColor }]
      };
    });
  };

  const getDateKey = (day) => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const [draftText, setDraftText] = useState({});
  const [draftType, setDraftType] = useState({});

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();
  const emptySlots = Array.from({ length: startDay });
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const changeMonth = (offset) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + offset);
      return newDate;
    });
  };
    return (
      <div className="calendar-container">
          <h1 style={{ fontSize: "2.4rem", fontWeight: "700", color: "#1B4965"}}>
          My Yealth Calendar
        </h1>
          <div className="calendar-header">
          <button className="buttons" onClick={() => changeMonth(-1)}>Previous Month</button>
          <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h2>
          <button className="buttons" onClick={() => changeMonth(1)}>Next Month</button>
  </div>
            <p> Keep track of appointments, deadlines, symptoms, and anything else important to your health. <br /><br /> Use the input box below each day to name your event and choose its type from the dropdown above; Press the 'Enter' key to see it on the specified day! Add your own Event Types by naming your event in the "Create New Event Type" box below, choose a color for it, and click "Add Type". <br /><br /> Happy organizing!</p>
      <div className="type-creator">
        <h3>Create New Event Type:</h3>
        <input className="type-name-input"
          type="text" 
          placeholder="Type Name (e.g. Fitness)" 
          value={newTypeName}
          onChange={(e) => setNewTypeName(e.target.value)}
        />
        <input 
          type="color" 
          value={newTypeColor}
          onChange={(e) => setNewTypeColor(e.target.value)}
          title="Pick a color"
        />
        <button className= "button-type" onClick={addCustomType}>Add Type</button>
      </div>

      <div className="week-days">
        {weekDays.map(d => <div key={d}>{d}</div>)}
      </div>

        <div className="calendar-grid">
            {emptySlots.map((_, index) => (
             <div key={`empty-${index}`} className="day-card empty"></div>
             ))}
            {days.map((dayNumber) => (
                <div key={dayNumber} className="day-card">
            <strong>{dayNumber}</strong>

            <div className="event-list">
              {(events[getDateKey(dayNumber)] || []).map((evt, index) => (
                <div 
                  key={index} 
                  className="event-pill" 
                  style={{ backgroundColor: evt.color }} // pick color!
                >
                  {evt.text}
                </div>
              ))}
            </div>

            {/* --- INPUT AREA (Bottom of card) --- */}
            <div className="day-input-area">
              <select 
                onChange={(e) => setDraftType({ ...draftType, [dayNumber]: e.target.value })}
                value={draftType[dayNumber] || availableTypes[0].color}
                style={{backgroundColor: draftType}}
              >
                {/* Map through ALL types (including custom ones) */}
                {availableTypes.map(type => (
                  <option key={type.name} value={type.color} style={{ backgroundColor: type.color }}>
                    {type.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="mini-input"
                placeholder="Add event..."
                value={draftText[dayNumber] || ''}
                onChange={(e) => setDraftText({ ...draftText, [dayNumber]: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addEventToDay(
                      dayNumber, 
                      draftText[dayNumber], 
                      draftType[dayNumber] || availableTypes[0].color
                    );
                    setDraftText({ ...draftText, [dayNumber]: '' }); // Clear input
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YealthCalendar;