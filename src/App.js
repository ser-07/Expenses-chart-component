import "./App.css";
import ChartDisplay from "./components/chartDisplay";
import logo from "./Assets/Images/logo.svg";
import dataAPI from "./data.json";

function App() {
  // console.log(dataAPI);
  return (
    <div className="App">
      <div className="card-head">
        <div className="card-head-left">
          <span>My balance</span>
          <span>
            <b>$921.48</b>
          </span>
        </div>
        <div className="card-head-right">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="card-body">
        <h2>Spending - Last 7 days</h2>
        <ChartDisplay dataAPI={dataAPI} />
        <div className="card-body-bottom">
          <div className="card-body-bottom-left">
            <p className="btm-txt">Total this month</p>
            <p className="btm-dl">
              <b>
                $
                {dataAPI
                  .map((item) => item.amount)
                  .reduce((tot, cur) => tot + cur) * 4}
              </b>{" "}
            </p>
          </div>
          <div className="card-body-bottom-right">
            <p>
              <b>+2.4%</b>
            </p>
            <p className="btm-txt">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
