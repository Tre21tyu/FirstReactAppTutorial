import React from 'react';

interface Props {
  moodScore: number;
  onMoodScoreChange: (newHappiness: number) => void;
}

function MoodScore({ moodScore, onMoodScoreChange }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHappiness = parseFloat(event.target.value);
    onMoodScoreChange(newHappiness);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="happiness" className="form-label">
          Happiness
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="10"
          step={0.00000001}
          id="mood-range"
          value={moodScore}
          onChange={handleInputChange}
        />
        <p>Selected Happiness: {moodScore.toFixed(4)}</p>
      </div>
      <div>
       <button className="btn btn-primary" type='submit'>Submit</button> 
      </div>
    </>
  );
}

export default MoodScore;