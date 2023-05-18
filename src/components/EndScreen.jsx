function EndScreen({ resetGame }) {
  return (
    <div>
      <h1>Congratulations!</h1>
      <p>You've gone through all the riddles!</p>
      <img src="path_to_your_image.jpg" alt="Congratulations" />
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
}

export default EndScreen;
