function RiddleModal({ riddle, handleUserChoice }) {
  return (
    <div>
      <h2>{riddle.question}</h2>
      <img src={riddle.image.src} alt={riddle.image.alt} />
      {riddle.choices.map((choice, index) => (
        <button key={index} onClick={() => handleUserChoice(index)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default RiddleModal;
