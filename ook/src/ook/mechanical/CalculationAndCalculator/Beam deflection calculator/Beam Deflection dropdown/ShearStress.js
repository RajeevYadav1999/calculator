import React, { useState } from "react";

import Areaimg from "../../Screenshot (165).jpg";

export default function ShearStress() {
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
              Shear Stress:
            </h3>
            <br />
            <h3 className="gbp-h3 structure-analysis-calculator-information-h3 defination">
              Internal force that acts parallel to the cross-sectional area of
              the beam. When a beam is subjected to transverse loads causing one
              layer of the material to slide or deform relative to adjacent
              layers. Also defined as the force per unit area acting parallel to
              a plane within the material.
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
        <h3
          className="calculator-defination-section third-important"
          style={{ color: "#000", textTransform: "uppercase" }}
        >
          Formula
        </h3>
        <br />
        <br />
        <h3
          className="calculator-defination-section third-important"
          style={{
            textAlign: "left",
            width: "58%",
            color: "#1d1d1dbf",
            marginBottom: "10px",
          }}
        >
          τ= F/A
        </h3>
        <h3
          className="calculator-defination-section third-important"
          style={{ textAlign: "left", width: "58%", color: "#1d1d1dbf" }}
        >
          SI unit of shear stress is pascal (Pa) or newton per square meter
          (N/m²)
        </h3>

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "15px",
              }}
            >
              <dot />
            </div>
            <div>
              <div>
                <h3
                  className="calculator-info-blue-section-main-topic"
                  style={{
                    padding: "0",
                    margin: "auto",
                    width: "80%",
                    justifyContent: "left",
                    fontSize: "2.2vw",
                    important: true,
                  }}
                >
                  Shear force diagram:{" "}
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
                  {" "}
                  Graphical representation of the shear force variation along a
                  beam or structural member's length when it is subjected to
                  external loads. The position of the beam is plotted along the
                  horizontal axis and the magnitude of the shear force is
                  plotted along the vertical axis. A useful tool for structural
                  analysis and design because it helps us to determine the
                  maximum shear force and its location and how shear forces vary
                  along a beam's length.
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
