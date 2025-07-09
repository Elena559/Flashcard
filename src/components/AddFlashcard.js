import React, { useState } from 'react';

function AddFlashcard({ addFlashcard }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(question && answer){
      addFlashcard(question, answer);
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Question" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Answer" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        required 
      />
      <button type="submit">Add a card</button>
    </form>
  );
}

export default AddFlashcard;