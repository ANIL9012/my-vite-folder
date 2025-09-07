import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset, incrementByAmount} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncAmount = () =>{
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <h1>Hii Redux</h1>
      <div className="container">
        <button onClick={handleIncrement}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrement}> - </button>
        <br />
        <br />
        <button onClick={handleReset}> Reset </button>
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleIncAmount}> Inc Amount </button>
      </div>
    </>
  );
}

export default App;
