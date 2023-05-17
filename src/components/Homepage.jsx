function Homepage({ startGame }) {
  return (
    <div>
      <h1>Ticklish Riddles</h1>
      <p>Think, laugh, repeat!</p>
      <p>
        Are you ready for a rollercoaster ride of riddles? Welcome to Ticklish
        Riddles, where every question is a tickle and every answer a belly
        laugh. Fasten your seatbelts, hold onto your funny bones, and let's get
        rolling!
      </p>
      <button onClick={startGame}>Start</button>
    </div>
  );
}
export default Homepage;
