import React, { useState } from "react";

import Areaimg from "../../Screenshot (165).jpg";

export default function Support() {
  const [isActive, setIsActive] = useState(true);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <section className="structure-analysis-calculator-formula-dropdown-section">
        <div className="mae-cad-info-second-section-main-grid-explore-more-grid">
          <div className="calculator-Area ">
            <div className="calculator-area-overlay"></div>
            <h3 className="gbp-h3 structure-analysis-calculator-information-h3">
              Support :
            </h3>
            <br />
            <h3 className="gbp-h3 structure-analysis-calculator-information-h3 defination">
              Essential components in structure that provide stability and
              resistance to forces under various load acting on it.
            </h3>
            <br />
            <button
              className="gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore"
              onClick={toggleClass}
            >
              Discover more
            </button>
            <br />
            <br />
          </div>
          <div>
            <img
              className="structure-analysis-calculator-formula-dropdown-section-img areaimg"
              src={Areaimg}
              alt=""
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          className={
            isActive ? "mae-calculator-info " : "mae-calculator-info  active"
          }
          style={{ border: "2px solid", borderRadius: "30px" }}
        >
          <br />
          <br />
          <br />
          <div>
            <h3
              className="calculator-info-blue-section-main-topic"
              style={{
                padding: "0",
                margin: "auto",
                width: "88%",
                justifyContent: "left",
                textTransform: "uppercase",
                fontWeight: "300",
                fontSize: "3.6vw",
                important: true,
              }}
            >
              Type of supports:
            </h3>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <dot />
                <hr style={{ height: "9.5vw", border: "1px solid" }} />
                <dot />
                <hr style={{ height: "9.5vw", border: "1px solid" }} />
                <dot />
              </div>
              <div>
                <h3
                  className="calculator-info-blue-section-main-topic"
                  style={{
                    padding: "0",
                    margin: "auto",
                    width: "80%",
                    justifyContent: "left",
                    fontSize: "2vw",
                  }}
                >
                  Fixed support:{" "}
                </h3>
                <h3
                  className="calculator-info-blue-section-main-topic"
                  style={{
                    padding: "0",
                    margin: "auto",
                    width: "80%",
                    justifyContent: "left",
                  }}
                >
                  Support that rigidly connects the beam to another structural
                  element. Fixed support prevent both rotation and translation
                  (vertical or horizontal direction). So there is three reaction
                  forces that are horizontal reaction (Vx), vertical reaction
                  (Vy) and moment (Mx).
                </h3>
                <br />
                <h3
                  className="calculator-info-blue-section-main-topic"
                  style={{
                    padding: "0",
                    margin: "auto",
                    width: "80%",
                    justifyContent: "left",
                    fontSize: "2vw",
                  }}
                >
                  Pin support:{" "}
                </h3>
                <h3
                  className="calculator-info-blue-section-main-topic"
                  style={{
                    padding: "0",
                    margin: "auto",
                    width: "80%",
                    justifyContent: "left",
                  }}
                >
                  Support is fixed at the bottom and has a hinge to attach
                  members in it. Support restrict both vertical and horizontal
                  movement, but allow rotation. Hence, it produces two reactions
                  to the applied force. One is horizontal reaction(Vx) and one
                  in vertical reaction ( Vy).
                </h3>
                <br />
                <h3
                  className="calculator-info-blue-section-main-topic"
                  style={{
                    padding: "0",
                    margin: "auto",
                    width: "80%",
                    justifyContent: "left",
                    fontSize: "2vw",
                  }}
                >
                  Roller support:{" "}
                </h3>
                <h3
                  className="calculator-info-blue-section-main-topic"
                  style={{
                    padding: "0",
                    margin: "auto",
                    width: "80%",
                    justifyContent: "left",
                  }}
                >
                  Support allows lateral movement and rotation but does not
                  allow vertical motion. Only have vertical reaction force in y
                  direction (Vy). Represented in mechanics with a triangle
                  having circles below it or just a circle. This kind of support
                  is found in large bridges, which allows thermal expansion and
                  contraction of the bridge.
                </h3>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
