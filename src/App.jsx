import { useState, useEffect } from 'react'
import RoseDay from './components/RoseDay'
import DemoMode from './components/DemoMode'
import LockedDay from './components/LockedDay'
import './App.css'

function App() {
  const [isDemo, setIsDemo] = useState(false)
  const [currentDay, setCurrentDay] = useState(null)
  const [isLocked, setIsLocked] = useState(false)
  const [lockedDayInfo, setLockedDayInfo] = useState(null)

  useEffect(() => {
    // Check for demo mode in URL
    const params = new URLSearchParams(window.location.search)
    const demoParam = params.get('demo') === 'true'
    setIsDemo(demoParam)
    
    // If demo mode, show demo interface
    if (demoParam) {
      return
    }

    // Valentine's Week 2026 dates
    const valentineDays = {
      '2026-02-07': { id: 'rose', name: 'Rose Day', emoji: '🌹' },
      '2026-02-08': { id: 'propose', name: 'Propose Day', emoji: '💍' },
      '2026-02-09': { id: 'chocolate', name: 'Chocolate Day', emoji: '🍫' },
      '2026-02-10': { id: 'teddy', name: 'Teddy Day', emoji: '🧸' },
      '2026-02-11': { id: 'promise', name: 'Promise Day', emoji: '🤝' },
      '2026-02-12': { id: 'hug', name: 'Hug Day', emoji: '🤗' },
      '2026-02-13': { id: 'kiss', name: 'Kiss Day', emoji: '💋' },
      '2026-02-14': { id: 'valentine', name: "Valentine's Day", emoji: '💕' },
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayStr = today.toISOString().split('T')[0]
    
    // Check if today is a Valentine's day
    if (valentineDays[todayStr]) {
      setCurrentDay(valentineDays[todayStr].id)
      setIsLocked(false)
    } else {
      // Check if we're before the week starts
      const firstDay = new Date('2026-02-07')
      firstDay.setHours(0, 0, 0, 0)
      
      if (today < firstDay) {
        // Before the week starts
        setLockedDayInfo({
          name: 'Rose Day',
          date: 'February 7, 2026',
          emoji: '🌹'
        })
        setIsLocked(true)
      } else {
        // After the week - find next day or show last day
        const dayEntries = Object.entries(valentineDays)
        let found = false
        
        for (const [dateStr, dayInfo] of dayEntries) {
          const dayDate = new Date(dateStr)
          dayDate.setHours(0, 0, 0, 0)
          
          if (today < dayDate) {
            // Found a future day
            setLockedDayInfo({
              name: dayInfo.name,
              date: new Date(dateStr).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              }),
              emoji: dayInfo.emoji
            })
            setIsLocked(true)
            found = true
            break
          }
        }
        
        if (!found) {
          // After Valentine's week, show last day
          setCurrentDay('valentine')
          setIsLocked(false)
        }
      }
    }
  }, [])

  // Demo mode - show admin interface
  if (isDemo) {
    return (
      <div className="app">
        <DemoMode />
      </div>
    )
  }

  if (isLocked && lockedDayInfo) {
    return (
      <div className="app">
        <LockedDay 
          dayName={lockedDayInfo.name}
          date={lockedDayInfo.date}
          emoji={lockedDayInfo.emoji}
        />
      </div>
    )
  }

  if (!currentDay) {
    return (
      <div className="app">
        <div className="loading">Loading your surprise... 💕</div>
      </div>
    )
  }

  return (
    <div className="app">
      {currentDay === 'rose' && <RoseDay />}
      {currentDay === 'propose' && (
        <LockedDay 
          dayName="Propose Day"
          date="February 8, 2026"
          emoji="💍"
        />
      )}
      {currentDay === 'chocolate' && (
        <LockedDay 
          dayName="Chocolate Day"
          date="February 9, 2026"
          emoji="🍫"
        />
      )}
      {currentDay === 'teddy' && (
        <LockedDay 
          dayName="Teddy Day"
          date="February 10, 2026"
          emoji="🧸"
        />
      )}
      {currentDay === 'promise' && (
        <LockedDay 
          dayName="Promise Day"
          date="February 11, 2026"
          emoji="🤝"
        />
      )}
      {currentDay === 'hug' && (
        <LockedDay 
          dayName="Hug Day"
          date="February 12, 2026"
          emoji="🤗"
        />
      )}
      {currentDay === 'kiss' && (
        <LockedDay 
          dayName="Kiss Day"
          date="February 13, 2026"
          emoji="💋"
        />
      )}
      {currentDay === 'valentine' && (
        <LockedDay 
          dayName="Valentine's Day"
          date="February 14, 2026"
          emoji="💕"
        />
      )}
    </div>
  )
}

export default App

