/* eslint-disable react/prop-types */

function Homepage({ startGame }) {
  return (
    <div className="homepage">
      <h1 className="site-title">Ticklish Riddles</h1>
      <p className="site-tagline">Think, laugh, repeat!</p>
      <p className="intro-text">
        Are you ready for a rollercoaster ride of riddles? Welcome to Ticklish
        Riddles, where every question is a tickle and every answer a belly
        laugh. Fasten your seatbelts, hold onto your funny bones, and let's get
        rolling!
      </p>
      <button className="start-btn" onClick={startGame}>
        Start
      </button>
    </div>
  );
}
export default Homepage;
