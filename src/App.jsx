import { useState } from 'react'
import FlashCard from './FlashCard'
import './App.css'

const initialCards = [
  { id: 1, question: 'Downward-Facing Dog', answer: 'Adho Mukha Svanasana - Start on hands and knees, lift hips up and back, straighten legs, press hands into mat, forming an inverted V-shape', image: null },
  { id: 2, question: 'Warrior I', answer: 'Virabhadrasana I - Step one foot back, bend front knee 90 degrees, keep back leg straight, raise arms overhead, square hips forward', image: '/images/Warrior 1 pose.png' },
  { id: 3, question: 'Tree Pose', answer: 'Vrksasana - Stand on one leg, place other foot on inner thigh or calf (not knee), bring hands to prayer position or overhead, focus on balance', image: null },
  { id: 4, question: 'Child\'s Pose', answer: 'Balasana - Kneel on mat, sit back on heels, fold forward with arms extended or alongside body, forehead resting on ground. Resting pose.', image: null },
  { id: 5, question: 'Cobra Pose', answer: 'Bhujangasana - Lie face down, place hands under shoulders, press into hands to lift chest up, keep elbows slightly bent, draw shoulders back', image: null },
  { id: 6, question: 'Mountain Pose', answer: 'Tadasana - Stand with feet together, distribute weight evenly, engage thighs, lengthen spine, arms at sides or overhead. Foundation pose.', image: null },
  { id: 7, question: 'Warrior II', answer: 'Virabhadrasana II - Similar to Warrior I but open hips to the side, extend arms parallel to ground, gaze over front fingertips', image: null },
  { id: 8, question: 'Cat-Cow Pose', answer: 'Marjaryasana-Bitilasana - On hands and knees, alternate between arching back (cow) and rounding spine (cat), synchronized with breath', image: null },
  { id: 9, question: 'Triangle Pose', answer: 'Trikonasana - Stand with feet wide apart, turn one foot out 90 degrees, extend arms parallel to floor, reach forward and down to place hand on shin or floor, extend other arm upward, gaze at top hand', image: null },
]

function App() {
  const [cards, setCards] = useState(initialCards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')

  const handleFlip = () => {
    setShowAnswer(!showAnswer)
  }

  const handleNext = () => {
    setShowAnswer(false)
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const handlePrevious = () => {
    setShowAnswer(false)
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const handleAddCard = (e) => {
    e.preventDefault()
    if (newQuestion.trim() && newAnswer.trim()) {
      const newCard = {
        id: cards.length + 1,
        question: newQuestion,
        answer: newAnswer,
      }
      setCards([...cards, newCard])
      setNewQuestion('')
      setNewAnswer('')
    }
  }

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setCurrentIndex(0)
    setShowAnswer(false)
  }

  return (
    <div className="app">
      <h1>Yoga Pose Flash Cards</h1>

      <div className="card-container">
        <FlashCard
          card={cards[currentIndex]}
          showAnswer={showAnswer}
          onFlip={handleFlip}
        />

        <div className="card-info">
          Card {currentIndex + 1} of {cards.length}
        </div>

        <div className="controls">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleShuffle}>Shuffle</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>

      <div className="add-card-form">
        <h2>Add New Card</h2>
        <form onSubmit={handleAddCard}>
          <input
            type="text"
            placeholder="Pose Name"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <textarea
            placeholder="Instructions (Sanskrit name and how to perform the pose)"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            rows="3"
          />
          <button type="submit">Add Card</button>
        </form>
      </div>
    </div>
  )
}

export default App
