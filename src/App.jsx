import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import RiddleModal from "./components/RiddleModal";
import FeedbackModal from "./components/FeedbackModal";
import riddlesData from "./riddles.json";
import EndScreen from "./components/EndScreen";

function App() {
  const [riddles, setRiddles] = useState([]);
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    setRiddles(riddlesData.riddles);
  }, []);

  useEffect(() => {
    if (gameStarted && riddles.length) {
      startGame();
    }
  }, [riddles, gameStarted]);

  const returnToHomepage = () => {
    setRiddles(riddlesData.riddles);
    setCurrentRiddle(null);
    setUserChoice(null);
    setCorrect(false);
    setShowFeedbackModal(false);
    setGameStarted(false);
  };

  const resetGame = () => {
    setRiddles(riddlesData.riddles);
    setCurrentRiddle(null);
    setUserChoice(null);
    setCorrect(false);
    setShowFeedbackModal(false);
    setGameStarted(false);
    startGame();
  };

  const startGame = () => {
    setGameStarted(true);
    const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    setCurrentRiddle(randomRiddle);
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setShowFeedbackModal(true);
    setCorrect(currentRiddle.correctChoiceIndex === choice);
  };

  const moveToNextRiddle = () => {
    setShowFeedbackModal(false);
    const newRiddles = riddles.filter((r) => r.id !== currentRiddle.id);
    setRiddles(newRiddles);
    if (newRiddles.length > 0) {
      const randomRiddle =
        newRiddles[Math.floor(Math.random() * newRiddles.length)];
      setCurrentRiddle(randomRiddle);
    } else {
      setCurrentRiddle(null);
    }
  };

  return (
    <div className="App">
      {!currentRiddle && !showFeedbackModal && !gameStarted && (
        <Homepage startGame={startGame} />
      )}
      {currentRiddle && !showFeedbackModal && (
        <RiddleModal
          riddle={currentRiddle}
          handleUserChoice={handleUserChoice}
        />
      )}
      {showFeedbackModal && (
        <FeedbackModal
          correct={correct}
          riddle={currentRiddle}
          moveToNextRiddle={moveToNextRiddle}
          userChoice={userChoice}
        />
      )}
      {riddles.length === 0 && !showFeedbackModal && gameStarted && (
        <EndScreen resetGame={resetGame} returnToHomepage={returnToHomepage} />
      )}
    </div>
  );
}

export default App;
