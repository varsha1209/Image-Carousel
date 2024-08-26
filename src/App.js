import { useEffect, useState } from 'react';
import './App.css';
import { data } from "./constants";

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNext = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(handleNext, 5000);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  return (
    <div className="App">
      <div className='CarouselContainer'>
        <button className='Button' onClick={handlePrevious}>Previous</button>
          <img className="Image" src={data[activeImageIndex]} alt='wallpaper'/>
        <button className='Button' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
