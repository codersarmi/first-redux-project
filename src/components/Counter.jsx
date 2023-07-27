import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isShow = useSelector((state) => state.isShow);
  const increaseHlandler = () => {
    dispatch({ type: "increase" });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease" });
  };
  const increaseby5 = () => {
    dispatch({ type: "increaseby5", amount: 10 });
  };
  const toggleHandler = () => {
    dispatch({ type: "toggleHandler" });
  };
  return (
    <section className="counter">
      <h1>Redux Counter</h1>
      {isShow && <h2>{counter}</h2>}
      <hr />
      <div className="counter_btns">
        <button className="counter-btn" onClick={increaseHlandler}>
          Increase
        </button>
        <button className="counter-btn" onClick={increaseby5}>
          Increaseby5
        </button>
        <button className="counter-btn" onClick={decreaseHandler}>
          Decrease
        </button>
        <button className="counter-btn" onClick={toggleHandler}>
          Toggle
        </button>
      </div>
    </section>
  );
};

export default Counter;
