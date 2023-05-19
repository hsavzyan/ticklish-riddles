/* eslint-disable react/prop-types */

function RiddleModal({ riddle, handleUserChoice }) {
  return (
    <div className="riddle-modal">
      <h2 className="riddle-question">{riddle.question}</h2>
      <img
        className="riddle-image"
        src={riddle.image.src}
        alt={riddle.image.alt}
      />
      <div className="choices-container">
        {riddle.choices.map((choice, index) => (
          <button
            className="choice-btn"
            key={index}
            onClick={() => handleUserChoice(index)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RiddleModal;
