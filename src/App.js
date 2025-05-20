import { useState } from 'react';
import Quiz from './components/Quiz';
import MemeGenerator from './components/MemeGenerator';
import './styles/App.css';

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [mood, setMood] = useState('');

  return (
    <div className="app-container">
      {!quizCompleted ? (
        <Quiz onComplete={(mood) => {
          setMood(mood);
          setQuizCompleted(true);
        }} />
      ) : (
        <MemeGenerator mood={mood} />
      )}
    </div>
  );
}

export default App;