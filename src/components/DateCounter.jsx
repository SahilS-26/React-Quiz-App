import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - action.payload;
  // if (action.type === "setCount") return action.payload;

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { step: 1, count: 0 };
    default:
      throw new Error("Unexpected action");
  }
}

function DateCounter() {
  /*
  - useReducer hook take 2 arguments :- 'reducer' function & initial/cur state.
  - We have to create the 'reducer' function with 2 params outside of the component. Param need to be state & action, state refers to current state & action refers to object which is passed in dispatch function.
  - useReducer returns the 'current/updated' state & 'dispatch' function.
  - 'dispatch' function is used to update the state by passing obj {type: name , payload: value}  -> dispatch({}).

  */
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: +e.target.value });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: +e.target.value });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
