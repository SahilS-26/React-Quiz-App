// eslint-disable-next-line react/prop-types
function FinishScreen({ points, numPossiblePoints, highscore }) {
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
    </>
  );
}

export default FinishScreen;
