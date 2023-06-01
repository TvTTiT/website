import React, { useState } from 'react';
import { IoIosReturnLeft } from 'react-icons/io';
import { MdDeleteSweep } from 'react-icons/md';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

import './styles.css';

const Card = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleFlipCard = (event) => {
    event.stopPropagation();
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className="card-container-holder">
      <div className={isCardFlipped ? 'card-container is-flipped' : 'card-container'}>
        <div className="card-face front-card-container">
          <FrontCard />
          <button className="button-flip" onClick={handleFlipCard} type="button" title="Real-time data">
            <IoIosReturnLeft size={30} className="icon" />
          </button>
          <button className="button-delete" type="button" title="Delete card">
            <MdDeleteSweep size={22} color="#FF4B2B" className="icon" />
          </button>
        </div>
        <div className="card-face back-card-container">
          <BackCard />
          <button className="button-flip" onClick={handleFlipCard} type="button" title="Patient data">
            <IoIosReturnLeft size={30} className="icon"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
