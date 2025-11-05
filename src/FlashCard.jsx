import './FlashCard.css'

function FlashCard({ card, showAnswer, onFlip }) {
  return (
    <div className={`flashcard ${showAnswer ? 'flipped' : ''}`} onClick={onFlip}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          {card.image && (
            <div className="pose-image">
              <img src={card.image} alt={card.question} />
            </div>
          )}
          <h3>Pose Name</h3>
          <p>{card.question}</p>
          <div className="flip-hint">Click to see instructions</div>
        </div>
        <div className="flashcard-back">
          <h3>Instructions</h3>
          <p>{card.answer}</p>
          <div className="flip-hint">Click to show pose name</div>
        </div>
      </div>
    </div>
  )
}

export default FlashCard
