function EndScreen({ resetGame, returnToHomepage }) {
  return (
    <div>
      <h1>Congratulations!</h1>
      <p>You've gone through all the riddles!</p>
      <img src="path_to_your_image.jpg" alt="Congratulations" />
      <button onClick={resetGame}>Play Again</button>
      <button onClick={returnToHomepage}>Return to Homepage</button>
    </div>
  );
}

export default EndScreen;
