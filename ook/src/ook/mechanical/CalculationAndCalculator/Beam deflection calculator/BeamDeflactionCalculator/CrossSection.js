import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CrossSection(props) {
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
            <h3 className="claculator-conversation-title">Area :</h3>
            <div className="Calculator-Side-A" style={{ width: "50%" }}>
              <br />
              {/* <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}></h3> */}
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
                  value={props.A}
                  onChange={props.AOnchange}
                />

                <select
                  className="Calculator-select-option"
                  value={props.UnitValue}
                  onChange={props.UnitValueOnchange}
                >
                  {props.AreaOption.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="claculator-conversation-title">
              Moment of Inertia :
            </h3>
            <div className="Calculator-Side-A" style={{ width: "50%" }}>
              <br />
              {/* <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}></h3> */}
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
                  value={props.I}
                  onChange={props.IOnchange}
                />
                <select
                  className="Calculator-select-option"
                  value={props.inertiaUnitvalue}
                  onChange={props.inertiaUnitonChange}
                >
                  {props.InteriaOption.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
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
            <h3 className="claculator-conversation-title">Area :</h3>
            <div className="Calculator-Side-A" style={{ width: "50%" }}>
              <br />
              {/* <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}></h3> */}
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
                  value={props.ImperialA}
                  onChange={props.ImperialAOnchange}
                />
                <select
                  className="Calculator-select-option"
                  value={props.ImperialUnitValue}
                  onChange={props.ImperialUnitValueOnchange}
                >
                  {props.ImperialAreaOption.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="claculator-conversation-title">
              Moment of Inertia :
            </h3>
            <div className="Calculator-Side-A" style={{ width: "50%" }}>
              <br />
              {/* <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}></h3> */}
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
                  value={props.ImperialI}
                  onChange={props.ImperialIOnchange}
                />
                <select
                  className="Calculator-select-option"
                  value={props.ImperialinertiaUnitvalue}
                  onChange={props.ImperialinertiaUnitonChange}
                >
                  {props.ImperialInteriaOption.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      )}

      <button className="BeamLinkBtntoBeamProperies">
        <Link to="/Singlepage">Calculate</Link>
      </button>
    </div>
  );
}
