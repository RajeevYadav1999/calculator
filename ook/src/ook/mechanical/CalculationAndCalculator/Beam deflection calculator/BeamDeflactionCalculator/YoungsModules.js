import React from "react";

export default function YoungsModules(props) {
  return (
    <div>
      <h3 className="color-white text-aligh-center">Input</h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          padding: "1vw 0",
        }}
      >
        <button
          onClick={() => props.MetricOrImperialbtn("option1")}
          style={{
            padding: "0.2vw 1vw",
            fontSize: "1.2vw",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          Metric
        </button>
        <button
          onClick={() => props.MetricOrImperialbtn("option2")}
          style={{
            padding: "0.2vw 1vw",
            fontSize: "1.2vw",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          Imperial
        </button>
      </div>
      {props.UnitConvertersystem}
      {props.MetricOrImperial === "option1" && (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="claculator-conversation-title">
              Material Yield Stres
            </h3>
            <div className="Calculator-Side-A" style={{ width: "50%" }}>
              <br />
              <div
                className="input-and-select-div"
                style={{ justifyContent: "center" }}
              >
                <input
                  style={{
                    border: "none",
                    float: "none",
                    textAlign: "center",
                    width: "70%",
                  }}
                  className="calculator-input"
                  type="number"
                  value={props.youngModulesvalue}
                  onChange={props.youngModulesonChange}
                />
                <select
                  className="Calculator-select-option"
                  value={props.youngModulesUnitvalue}
                  onChange={props.youngModulesUnitonChange}
                >
                  {props.youngModulesOption}
                </select>
              </div>
            </div>
          </div>
        </>
      )}
      {props.MetricOrImperial === "option2" && (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="claculator-conversation-title">
              Material Yield Stres
            </h3>
            <div className="Calculator-Side-A" style={{ width: "50%" }}>
              <br />
              <div
                className="input-and-select-div"
                style={{ justifyContent: "center" }}
              >
                <input
                  style={{
                    border: "none",
                    float: "none",
                    textAlign: "center",
                    width: "70%",
                  }}
                  className="calculator-input"
                  type="number"
                  value={props.ImperialyoungModulesvalue}
                  onChange={props.ImperialyoungModulesonChange}
                />
                <select
                  className="Calculator-select-option"
                  value={props.ImperialyoungModulesUnitvalue}
                  onChange={props.ImperialyoungModulesUnitonChange}
                >
                  {props.ImperialyoungModulesOption}
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
