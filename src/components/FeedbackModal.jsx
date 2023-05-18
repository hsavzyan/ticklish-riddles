function FeedbackModal({
  correct,
  riddle,
  moveToNextRiddle,
  userChoice,
  resetUserChoice,
}) {
  return (
    <div>
      <h2>
        {correct
          ? riddle.correctFeedback
          : userChoice !== riddle.correctChoiceIndex
          ? riddle.incorrectFeedback[userChoice]
          : ""}
      </h2>
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
      {!correct && <button onClick={resetUserChoice}>Try Again</button>}
      <button onClick={moveToNextRiddle}>Next</button>
    </div>
  );
}

export default FeedbackModal;
