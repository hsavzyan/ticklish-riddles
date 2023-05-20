/* eslint-disable react/prop-types */

import { useState } from "react";
import "./RiddleModal.css";

function RiddleModal({ riddle, handleUserChoice }) {
  const [hintShown, setHintShown] = useState(false);

  const handleHintClick = () => {
    setHintShown(!hintShown);
  };

  return (
    <div className="riddle-modal-parent">
      <div className="riddle-modal">
        <h2 className="riddle-question">{riddle.question}</h2>
        <div className="riddle-image-container">
          <img
            className="riddle-image"
            src={riddle.image.src}
            alt={riddle.image.alt}
          />
          <button
            className={`hint-btn ${hintShown ? "hint-shown" : ""}`}
            onClick={handleHintClick}
          >
            {hintShown ? "Hide Hint" : "Hint"}
          </button>
          {hintShown && (
            <div className="hint-text">
              <p>{riddle.hint}</p>
            </div>
          )}
        </div>
        <div className="choices-container">
          {riddle.choices.map(
            (choice, index) =>
              index % 2 === 0 && (
                <button
                  className="choice-btn"
                  key={index}
                  onClick={() => handleUserChoice(index)}
                >
                  {choice.text}
                </button>
              )
          )}
        </div>
        <div className="choices-container">
          {riddle.choices.map(
            (choice, index) =>
              index % 2 !== 0 && (
                <button
                  className="choice-btn"
                  key={index}
                  onClick={() => handleUserChoice(index)}
                >
                  {choice.text}
                </button>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default RiddleModal;
