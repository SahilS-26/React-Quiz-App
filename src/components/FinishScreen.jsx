// eslint-disable-next-line react/prop-types
function FinishScreen({ points, numPossiblePoints, highscore, dispatch }) {
  const percent = (points / numPossiblePoints) * 100;

  let emoji;
  if (percent === 100) emoji = "🥇";
  if (percent >= 80 && percent < 100) emoji = "🎉";
  if (percent >= 50 && percent < 80) emoji = "🥶";
  if (percent > 0 && percent < 50) emoji = "☹";
  if (percent === 0) emoji = "🥴";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {numPossiblePoints}{" "}
        points ({Math.ceil(percent)}%)
      </p>

      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
