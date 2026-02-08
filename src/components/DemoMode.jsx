import { useState } from 'react'
import RoseDay from './RoseDay'
import './DemoMode.css'

const DAYS = [
  { id: 'rose', name: 'Rose Day', date: 'Feb 7', emoji: '🌹' },
  { id: 'propose', name: 'Propose Day', date: 'Feb 8', emoji: '💍' },
  { id: 'chocolate', name: 'Chocolate Day', date: 'Feb 9', emoji: '🍫' },
  { id: 'teddy', name: 'Teddy Day', date: 'Feb 10', emoji: '🧸' },
  { id: 'promise', name: 'Promise Day', date: 'Feb 11', emoji: '🤝' },
  { id: 'hug', name: 'Hug Day', date: 'Feb 12', emoji: '🤗' },
  { id: 'kiss', name: 'Kiss Day', date: 'Feb 13', emoji: '💋' },
  { id: 'valentine', name: "Valentine's Day", date: 'Feb 14', emoji: '💕' },
]

function DemoMode() {
  const [selectedDay, setSelectedDay] = useState('rose')

  return (
    <div className="demo-mode">
      <div className="demo-banner">
        <h2>🎭 DEMO MODE - ADMIN ACCESS</h2>
        <p>This is your testing view. She won't see this!</p>
      </div>
      
      <div className="day-selector">
        <h3>Select Day to Test:</h3>
        <div className="day-buttons">
          {DAYS.map(day => (
            <button
              key={day.id}
              className={`day-btn ${selectedDay === day.id ? 'active' : ''}`}
              onClick={() => setSelectedDay(day.id)}
            >
              <span className="day-emoji">{day.emoji}</span>
              <span className="day-name">{day.name}</span>
              <span className="day-date">{day.date}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="demo-content">
        {selectedDay === 'rose' && <RoseDay />}
        {selectedDay === 'propose' && (
          <div className="coming-soon">
            <h2>💍 Propose Day 💍</h2>
            <p>Coming soon - This will be ready for Feb 8!</p>
          </div>
        )}
        {selectedDay === 'chocolate' && (
          <div className="coming-soon">
            <h2>🍫 Chocolate Day 🍫</h2>
            <p>Coming soon - This will be ready for Feb 9!</p>
          </div>
        )}
        {selectedDay === 'teddy' && (
          <div className="coming-soon">
            <h2>🧸 Teddy Day 🧸</h2>
            <p>Coming soon - This will be ready for Feb 10!</p>
          </div>
        )}
        {selectedDay === 'promise' && (
          <div className="coming-soon">
            <h2>🤝 Promise Day 🤝</h2>
            <p>Coming soon - This will be ready for Feb 11!</p>
          </div>
        )}
        {selectedDay === 'hug' && (
          <div className="coming-soon">
            <h2>🤗 Hug Day 🤗</h2>
            <p>Coming soon - This will be ready for Feb 12!</p>
          </div>
        )}
        {selectedDay === 'kiss' && (
          <div className="coming-soon">
            <h2>💋 Kiss Day 💋</h2>
            <p>Coming soon - This will be ready for Feb 13!</p>
          </div>
        )}
        {selectedDay === 'valentine' && (
          <div className="coming-soon">
            <h2>💕 Valentine's Day 💕</h2>
            <p>Coming soon - This will be ready for Feb 14!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DemoMode

