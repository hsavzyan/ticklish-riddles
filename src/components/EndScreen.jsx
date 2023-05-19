/* eslint-disable react/prop-types */

function EndScreen({ resetGame, returnToHomepage }) {
  return (
    <div className="end-screen">
      <h1 className="congrats-text">Congratulations!</h1>
      <p className="end-screen-text">You've gone through all the riddles!</p>
      <img
        className="congrats-image"
        src="path_to_your_image.jpg"
        alt="Congratulations"
      />
      <div className="end-screen-btns">
        <button className="play-again-btn" onClick={resetGame}>
          Play Again
        </button>
        <button className="return-home-btn" onClick={returnToHomepage}>
          Return to Homepage
        </button>
      </div>
    </div>
  );
}

export default EndScreen;
