interface Props {
  sleepQScore: number;
  onSleepQScoreChange: (newHappiness: number) => void;
}

function SleepQualityScore({ sleepQScore, onSleepQScoreChange }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSleepQ = parseFloat(event.target.value);
    onSleepQScoreChange(newSleepQ);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="happiness" className="form-label">
          Sleep Quality
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="10"
          step={0.00000001}
          id="sleep-q-range"
          value={sleepQScore}
          onChange={handleInputChange}
        />
        <p>Selected Sleep Quality: {sleepQScore.toFixed(4)}</p>
      </div>
      <div>
       <button className="btn btn-primary" type='submit'>Submit</button> 
      </div>
    </>
  );
}

export default SleepQualityScore;