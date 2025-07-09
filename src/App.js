import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import AddFlashcard from './components/AddFlashcard';
import './App.css';

function App() {
  // Загружаем из localStorage или задаем начальные карточки
  const [flashcards, setFlashcards] = useState(() => {
    const saved = localStorage.getItem('flashcards');
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [
       // { id: 1, question: 'What is React?', answer: 'JavaScript библиотека для построения интерфейсов' },
       // { id: 2, question: 'What are components???', answer: 'Повторно используемые части интерфейса' },
        // добавьте начальные карточки по желанию
      ];
    }
  });

  // Обновляем localStorage при изменении массива карточек
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const addFlashcard = (question, answer) => {
    const newCard = {
      id: Date.now(),
      question,
      answer,
    };
    setFlashcards([...flashcards, newCard]);
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  return (
    <div className="app">
      <h1>Flashcards App</h1>
      <AddFlashcard addFlashcard={addFlashcard} />
      <FlashcardList flashcards={flashcards} deleteFlashcard={deleteFlashcard} />
    </div>
  );
}

export default App;