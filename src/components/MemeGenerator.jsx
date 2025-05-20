import React, { useState } from 'react';
import axios from 'axios';  // Don't forget to import axios!
import '../styles/MemeGenerator.css';

const MemeGenerator = ({ mood }) => {
  const [caption, setCaption] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Optional: for loading state
  
  // Placeholder meme images (replace with real URLs)
  const memeTemplates = {
    Happy: 'https://i.imgflip.com/4/1bij.jpg',
    Meh: 'https://i.imgflip.com/4/1bgw.jpg',
    Sad: 'https://i.imgflip.com/4/1bh8.jpg'
  };

  const handleDownload = async () => {
    setIsLoading(true);  // Optional: show loading state
    try {
      const response = await axios.post('https://moodmorph-backend.onrender.com', {
        mood,
        caption
      });
      
      console.log('Meme generated:', response.data.memeUrl);
      // Here you would actually implement the download functionality
      alert(`Meme generated at: ${response.data.memeUrl}`);
      
      // Optional: trigger actual download
      // window.open(response.data.memeUrl, '_blank');
    } catch (error) {
      console.error('Error generating meme:', error);
      alert('Failed to generate meme. Please try again.');
    } finally {
      setIsLoading(false);  // Optional: hide loading state
    }
  };

  return (
    <div className="meme-generator">
      <img src={memeTemplates[mood]} alt={`${mood} Meme`} />
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Add a funny caption..."
      />
      <button onClick={handleDownload} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Download & Share'}
      </button>
    </div>
  );
};

export default MemeGenerator;