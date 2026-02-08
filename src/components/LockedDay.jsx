import './LockedDay.css'

function LockedDay({ dayName, date, emoji }) {
  const getDaysUntil = () => {
    const today = new Date()
    const targetDate = new Date(date)
    const diffTime = targetDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysUntil = getDaysUntil()

  return (
    <div className="locked-day">
      <div className="locked-content">
        <div className="lock-icon">🔒</div>
        <h1>{emoji} {dayName} {emoji}</h1>
        <div className="countdown">
          {daysUntil > 0 ? (
            <>
              <p className="wait-message">This treasure is locked until {date}</p>
              <div className="days-remaining">
                <span className="days-number">{daysUntil}</span>
                <span className="days-label">
                  {daysUntil === 1 ? 'day' : 'days'} to go!
                </span>
              </div>
              <p className="patience-message">
                Good things come to those who wait... 💕
              </p>
            </>
          ) : (
            <>
              <p className="wait-message">This treasure will unlock on {date}</p>
              <p className="patience-message">
                Check back soon! 💕
              </p>
            </>
          )}
        </div>
        <div className="rose-decoration">
          <span>🌹</span>
          <span>🌹</span>
          <span>🌹</span>
        </div>
      </div>
    </div>
  )
}

export default LockedDay

