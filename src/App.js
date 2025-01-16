import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    // console.log("w", weightNum, "h", heightNum);
    if (
      isNaN(weightNum) ||
      isNaN(heightNum) ||
      weightNum <= 0.0 ||
      heightNum <= 0.0
    ) {
      alert("Please enter valid values for weight and height.");
    } else {
      const bmiValue = (weightNum / (heightNum * heightNum)) * 10000;
      // console.log(bmiValue);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue <= 18.5) {
        setMsg("Underweight");
      } else if (bmiValue > 18.5 && bmiValue <= 24.9) {
        setMsg("Normal");
      } else if (bmiValue > 24.9 && bmiValue <= 29.9) {
        setMsg("Overweight");
      } else {
        setMsg("Obese");
      }
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMsg("");
  };

  return (
    <div className="App">
      <div className="outer">
        <div className="container">
          <div className="head_div">
            <h2 className="Heading1">Let's find your BMI!</h2>
          </div>
          <form onSubmit={calculate}>
            <div className="weight_div">
              <label>Weight: in (kgs)</label>
              <input
                className="Weight"
                type="number"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="height_div">
              <label>Height: in (m)</label>
              <input
                className="Height"
                type="number"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="btns">
              <button className="sub_btn" type="submit">
                CALCULATE
              </button>
              <button className="reset_btn" type="button" onClick={reset}>
                RESET
              </button>
            </div>
            <div className="content">
              <h3>Your BMI is : {bmi}</h3>
              <h3 className="status">Status : {msg}</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
