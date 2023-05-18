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
          ? riddle.choices[riddle.correctChoiceIndex].feedback
          : riddle.choices[userChoice].feedback}
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
