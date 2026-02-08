import { useState, useEffect } from 'react'
import './RoseDay.css'

const PUZZLE_SIZE = 3 // 3x3 grid

function RoseDay() {
  const [pieces, setPieces] = useState([])
  const [solved, setSolved] = useState(false)
  const [moves, setMoves] = useState(0)
  const [startTime] = useState(Date.now())
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    // Initialize puzzle pieces
    const initialPieces = Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, i) => ({
      id: i,
      correctPosition: i,
      currentPosition: i,
    }))
    
    // Shuffle pieces (keep last one as empty space)
    const shuffled = [...initialPieces.slice(0, -1)]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    shuffled.push(initialPieces[initialPieces.length - 1])
    
    setPieces(shuffled.map((piece, idx) => ({
      ...piece,
      currentPosition: idx
    })))
  }, [])

  useEffect(() => {
    if (solved) return
    
    const interval = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    
    return () => clearInterval(interval)
  }, [solved, startTime])

  useEffect(() => {
    // Check if puzzle is solved
    const isSolved = pieces.every(piece => piece.currentPosition === piece.correctPosition)
    if (isSolved && pieces.length > 0) {
      setSolved(true)
    }
  }, [pieces])

  const handlePieceClick = (clickedPiece) => {
    if (solved) return
    
    // Sort pieces by currentPosition to match visual grid
    const sortedPieces = [...pieces].sort((a, b) => a.currentPosition - b.currentPosition)
    const emptyPiece = sortedPieces.find(p => p.id === PUZZLE_SIZE * PUZZLE_SIZE - 1)
    const clickedIndex = sortedPieces.findIndex(p => p.id === clickedPiece.id)
    const emptyIndex = sortedPieces.findIndex(p => p.id === emptyPiece.id)
    
    // Check if clicked piece is adjacent to empty space
    const row = Math.floor(clickedIndex / PUZZLE_SIZE)
    const col = clickedIndex % PUZZLE_SIZE
    const emptyRow = Math.floor(emptyIndex / PUZZLE_SIZE)
    const emptyCol = emptyIndex % PUZZLE_SIZE
    
    const isAdjacent = 
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    
    if (isAdjacent) {
      const newPieces = pieces.map(p => {
        if (p.id === clickedPiece.id) {
          return { ...p, currentPosition: emptyPiece.currentPosition }
        }
        if (p.id === emptyPiece.id) {
          return { ...p, currentPosition: clickedPiece.currentPosition }
        }
        return p
      })
      setPieces(newPieces)
      setMoves(moves + 1)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="rose-day">
      <div className="rose-header">
        <h1>🌹 Rose Day 🌹</h1>
        <p className="subtitle">Piece together our photo like rose petals to reveal your surprise!</p>
        <div className="rose-petals">
          <span className="petal">🌹</span>
          <span className="petal">🌹</span>
          <span className="petal">🌹</span>
        </div>
      </div>

      {!solved ? (
        <>
          <div className="puzzle-stats">
            <div className="stat">
              <span className="stat-label">Moves:</span>
              <span className="stat-value">{moves}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Time:</span>
              <span className="stat-value">{formatTime(timeElapsed)}</span>
            </div>
          </div>

          <div className="puzzle-container">
            <div className="puzzle-grid" style={{ gridTemplateColumns: `repeat(${PUZZLE_SIZE}, 1fr)` }}>
              {[...pieces].sort((a, b) => a.currentPosition - b.currentPosition).map((piece) => {
                const isLast = piece.id === PUZZLE_SIZE * PUZZLE_SIZE - 1
                const row = Math.floor(piece.currentPosition / PUZZLE_SIZE)
                const col = piece.currentPosition % PUZZLE_SIZE
                const correctRow = Math.floor(piece.correctPosition / PUZZLE_SIZE)
                const correctCol = piece.correctPosition % PUZZLE_SIZE
                
                // Calculate background position for 3x3 grid
                // For backgroundSize: 300%, each piece shows 1/3 of image
                // Position: col 0 = 0%, col 1 = -100%, col 2 = -200%
                const bgPosX = correctCol * -100
                const bgPosY = correctRow * -100
                
                return (
                  <div
                    key={piece.id}
                    className={`puzzle-piece ${isLast ? 'empty' : ''} ${
                      piece.currentPosition === piece.correctPosition ? 'correct' : ''
                    }`}
                    style={!isLast ? {
                      backgroundImage: `url('/our-photo.JPG')`,
                      backgroundPositionX: `${bgPosX}%`,
                      backgroundPositionY: `${bgPosY}%`,
                      backgroundSize: '300% 300%',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: 'transparent',
                    } : {
                      backgroundColor: '#f0f0f0',
                      backgroundImage: 'none'
                    }}
                    onClick={() => !isLast && handlePieceClick(piece)}
                  >
                    {!isLast && (
                      <span className="piece-number" title={`Piece ${piece.id + 1}`}>{piece.id + 1}</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="surprise-reveal">
          <div className="celebration">🌹✨🌹</div>
          <h2>The Rose Has Bloomed! 💕</h2>
          <div className="surprise-message">
            <p className="message-text">
              Every rose I give you represents a moment of love,<br />
              a memory we've shared, a promise for tomorrow.<br />
              <br />
              Today, on Rose Day, I want you to know that<br />
              you are the most beautiful rose in my garden of life. 🌹<br />
              <br />
              <strong>I love you more than words can say.</strong>
            </p>
            <div className="stats-summary">
              <p>Completed in {moves} moves!</p>
              <p>Time: {formatTime(timeElapsed)}</p>
            </div>
          </div>
        </div>
      )}

      <div className="instructions">
        <p>🌹 Click on pieces next to the empty space to move them</p>
        <p className="rose-hint">Each piece is like a petal - bring them together to bloom! 🌹</p>
      </div>
    </div>
  )
}

export default RoseDay

