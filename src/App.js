import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import AddFlashcard from './components/AddFlashcard';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'Что такое React?', answer: 'JavaScript библиотека для построения интерфейсов' },
    { id: 2, question: 'What are components???', answer: 'Повторно используемые части интерфейса' },
    { id: 2, question: 'Apple?', answer: 'яблоко' },
    { id: 2, question: 'Apricot?', answer: 'абрикос'},
    { id: 2, question: 'Pineapple?', answer: 'ананас'},
   { id: 2, question: 'Banana?', answer: 'банан'},
   
    // добавьте начальные карточки по желанию
  ]);

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
  
