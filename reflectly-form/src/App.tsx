import { useState } from 'react';
import MoodScore from './components/MoodScore/MoodScore';
import SleepQualityScore from './components/SleepQualityScore/SleepQualityScore';

const App: React.FC = () => {
  const [happiness, setHappiness] = useState(5);
  const [sleepQuality, setSleepQuality] = useState(5);

  const handleHappinessChange = (newHappiness: number) => {
    setHappiness(newHappiness);
  };

  const handleSleepQualityChange = (newSleepQ: number) => {
    setSleepQuality(newSleepQ);
  };

  return (
    <>
    <div className="App">
      <MoodScore moodScore={happiness} onMoodScoreChange={handleHappinessChange} />
      </div>
      <div className="mb-3">
        <SleepQualityScore sleepQScore={sleepQuality} onSleepQScoreChange={handleSleepQualityChange}/>
      </div>
    </>
  );
};

export default App;
