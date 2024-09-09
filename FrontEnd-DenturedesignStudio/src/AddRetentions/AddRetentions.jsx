import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddRetentions.css";
import Home from "../homebutton/home";
import BackComp from "../backComp/backComp";
import Teeth from "../TeethComp/Teeth";
import ReviewCanvas from "../ReviewAnswer/ReviewCanvas";

function AddRetentions() {
  const location = useLocation();
  const navigate = useNavigate();
  const curves = location.state?.curves;
  const userdata = location.state?.userdata;
  const [retentionType, setRetentionType] = useState();
  const [occlusallyType, setOcclusallyType] = useState();
  const fromReview = location.state?.fromReview;
  const [selectedData, setSelectedData] = useState(
    fromReview
      ? location.state?.selectedData
      : location.state?.selectedData
      ? {
          retentiondata: null,
          missingteeth: location.state?.selectedData.missingteeth,
          undercuts: location.state?.selectedData.undercuts,
          restdata: location.state?.selectedData.restdata,
          clasp: location.state?.selectedData.claspdata,
          plates: location.state?.selectedData.plates,
          gingivally: null,
        }
      : {
          retentiondata: null,
          restdata: null,
          missingteeth: null,
          undercuts: null,
          clasp: null,
          plates: null,
          gingivally: null,
        }
  );

  function handleClick(path) {
    navigate(path);
  }

  const setData = (data) => {
    setSelectedData({
      restdata: data.rests ? data.rests : null,
      missingteeth: data.teeths ? data.teeths : null,
      undercuts: data.undercuts ? data.undercuts : null,
      plates: data.plates ? data.plates : null,
      clasps: data.clasps ? data.clasps : null,
      retentiondata: data.retentions ? data.retentions : null,
      gingivally: data.gingivally ? data.gingivally : null,
    });
  };
  console.log(selectedData);
  return (
    <div className="designPage">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
      />
      <div className="AddRetentions">
        <Home
          onClick={() => navigate("/studenthome", { state: { userdata } })}
        />
        {!fromReview ? (
          <BackComp
            onClick={() =>
              navigate("/addRests", {
                state: { selectedData, userdata },
              })
            }
          />
        ) : null}
        <div>
          <div className="Questionbox"></div>
          <div className="teethBackground1">
            <div className="retention-teeth">
              <Teeth
                selectRetention={
                  retentionType
                    ? {
                        retentionType: retentionType,
                        selectretention: true,
                        occlusallyType:
                          retentionType === "occlusally"
                            ? occlusallyType
                            : null,
                      }
                    : {
                        selectretention: fromReview ? true : false,
                        occlusallyType: null,
                      }
                }
                click={(index) => console.log(`Clicked tooth ${index}`)}
                selectRest={{ selectrest: true }}
                DentureData={selectedData}
                setData={setData}
                value={{ canEdit: false, visible: true }}
                selectPlate={fromReview ? { view: true } : { view: false }}
                selectClasp={fromReview ? { view: true } : { view: false }}
              />
              <ReviewCanvas drewcurves={curves} />
            </div>
            <button
              className="addReciprocations"
              onClick={() =>
                fromReview
                  ? navigate("/reviewanswer", {
                      state: { selectedData, curves, userdata },
                    })
                  : navigate("/addReciprocations", {
                      state: { selectedData, userdata },
                    })
              }
            >
              <div className="addRecipText">
                <span className="addRecipText">
                  {fromReview ? "Review Answer" : "Add Reciprocations"}
                </span>
              </div>
            </button>

            <ul className="retentions-list">
              <li
                id="occlusally"
                onClick={() => setRetentionType("occlusally")}
                style={{
                  color: retentionType === "occlusally" ? "#ffffff" : "#66d8d8",
                }}
              >
                Occlusally Approaching
              </li>
              {retentionType === "occlusally" && (
                <ul className="occlusally-subtypes">
                  <li
                    id="ringType"
                    onClick={() => setOcclusallyType("ring")}
                    style={{
                      color: occlusallyType === "ring" ? "#ffffff" : "#66d8d8",
                    }}
                  >
                    Ring Type
                  </li>
                  <li
                    id="circumferentialType"
                    onClick={() => setOcclusallyType("circumferential")}
                    style={{
                      color:
                        occlusallyType === "circumferential"
                          ? "#ffffff"
                          : "#66d8d8",
                    }}
                  >
                    Circumferential
                  </li>
                </ul>
              )}
              <li
                id="gingivally"
                onClick={() => setRetentionType("gingivally")}
                style={{
                  color: retentionType === "gingivally" ? "#ffffff" : "#66d8d8",
                }}
              >
                Gingivally Approaching
              </li>
            </ul>
          </div>
          <h2 className="AddSaddles">Add Retentions</h2>
          <h2 className="yourQuestion">Your Question</h2>
          <h1 className="yourCase">Your Case :</h1>
        </div>
      </div>
    </div>
  );
}

export default AddRetentions;
