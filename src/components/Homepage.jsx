/* eslint-disable react/prop-types */
import "./Homepage.css";

function Homepage({ startGame }) {
  return (
    <div className="homepage">
      <h1 className="site-title">Ticklish Riddles</h1>
      <p className="site-tagline">Think, laugh, repeat!</p>
      <p className="intro-text">
        Get ready for a riddle-filled thrill ride at Ticklish Riddles. Hold
        tight to your humor and let's roll!
      </p>
      <button className="start-btn" onClick={startGame}>
        Start
      </button>
    </div>
  );
}
export default Homepage;
