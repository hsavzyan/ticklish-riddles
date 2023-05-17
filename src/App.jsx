import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import RiddleModal from "./components/RiddleModal";
import FeedbackModal from "./components/FeedbackModal";
import riddlesData from "./riddles.json";

function App() {
  const [riddles, setRiddles] = useState([]);
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    setRiddles(riddlesData.riddles);
  }, []);

  const startGame = () => {
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
      {!currentRiddle && <Homepage startGame={startGame} />}
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
        />
      )}
    </div>
  );
}

export default App;
