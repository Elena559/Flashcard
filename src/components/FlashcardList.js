import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards, deleteFlashcard }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length -1 : prevIndex -1
    );
  };

  if (flashcards.length === 0) {
    return <p>No flashcards available. Please add some.</p>;
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className="carousel">
      <button onClick={handlePrev}>⬅️</button>
      <Flashcard flashcard={currentCard} onSpeak={(text) => window.speechSynthesis.speak(new SpeechSynthesisUtterance(text))} />
      <button onClick={handleNext}>➡️</button>
      <button onClick={() => deleteFlashcard(currentCard.id)}>Delete</button>
    </div>
  );
}

export default FlashcardList;