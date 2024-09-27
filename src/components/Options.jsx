/* eslint-disable react/prop-types */
export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((opt, index) => (
        <button
          key={opt}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
