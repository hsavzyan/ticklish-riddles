/* eslint-disable react/prop-types */

function FeedbackModal({
  correct,
  riddle,
  moveToNextRiddle,
  userChoice,
  resetUserChoice,
}) {
  return (
    <div className="feedback-modal">
      <h2 className="feedback-text">
        {correct
          ? riddle.choices[riddle.correctChoiceIndex].feedback
          : riddle.choices[userChoice].feedback}
      </h2>
      <img
        className="feedback-image"
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
      <div className="modal-btns">
        {!correct && (
          <button className="retry-btn" onClick={resetUserChoice}>
            Try Again
          </button>
        )}
        <button className="next-btn" onClick={moveToNextRiddle}>
          Next
        </button>
      </div>
    </div>
  );
}

export default FeedbackModal;
