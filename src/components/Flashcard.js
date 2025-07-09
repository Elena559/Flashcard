import React, { useState } from 'react';

function Flashcard({ flashcard }) {
  const { question, answer } = flashcard;
  const [showAnswer, setShowAnswer] = useState(false);

  // Функция для озвучивания текста
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      // Устанавливаем язык на английский
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Ваш браузер не поддерживает озвучивание.');
    }
  };

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      className="flashcard"
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        cursor: 'pointer',
        maxWidth: '400px'
      }}
      onClick={handleCardClick}
    >
      <h3>Вопрос: {question}</h3>
      <button onClick={(e) => { e.stopPropagation(); speakText(question); }}>🔊 Voice the question</button>
      
      {showAnswer && (
        <>
          <h4>Ответ: {answer}</h4>
          <button onClick={(e) => { e.stopPropagation(); speakText(answer); }} style={{ marginLeft: '10px' }}>🔊Voice the answer</button>
        </>
      )}
    </div>
  );
}

export default Flashcard;