import React, { useState } from 'react';
import '../styles/Quiz.css';

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    "How's your mood today? 😊",
    "Energy level? ⚡",
    "Describe your vibe in one word 🎵"
  ];

  const options = ["Happy", "Meh", "Sad"];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestion]}</h2>
      <div className="options">
        {options.map((option) => (
          <button 
            key={option}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;