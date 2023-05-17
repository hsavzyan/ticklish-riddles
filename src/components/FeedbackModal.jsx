function FeedbackModal({ correct, riddle, moveToNextRiddle }) {
  return (
    <div>
      <h2>{correct ? riddle.correctFeedback : riddle.incorrectFeedback}</h2>
      <img
        src={
          correct
            ? riddle.correctAnswerImage.src
            : riddle.incorrectAnswerImage.src
        }
        alt={
          correct
            ? riddle.correctAnswerImage.alt
            : riddle.incorrectAnswerImage.alt
        }
      />
      <button onClick={moveToNextRiddle}>Next</button>
    </div>
  );
}

export default FeedbackModal;
