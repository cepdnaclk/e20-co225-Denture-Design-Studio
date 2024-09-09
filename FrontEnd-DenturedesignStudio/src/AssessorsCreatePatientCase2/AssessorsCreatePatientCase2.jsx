import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AssessorsCreatePatientCase2.css";
import Home from "../homebutton/home";
import CreateUploadButton from "../CreateUploadButton/CreateUploadButton";
import BackComp from "../backComp/backComp";
import Teeth from "../TeethComp/Teeth";

function AssessorCreatePatientStep2() {
  const navigate = useNavigate();
  const location = useLocation();
  const typeselect = location.state?.typeselect;
  function handleClick(path) {
    navigate(path);
  }
  const [selectedData, setSelectedData] = useState(
    location.state?.selectedData
      ? {
          retentiondata: null,
          missingteeth: location.state?.selectedData.missingteeth,
          undercuts: location.state?.selectedData.undercuts,
          restdata: location.state?.selectedData.restdata,
        }
      : {
          retentiondata: null,
          restdata: null,
          missingteeth: null,
          undercuts: null,
        }
  );
  console.log(selectedData);
  const setData = (data) => {
    setSelectedData({
      restdata: data.rests ? data.rests : null,
      missingteeth: data.teeths ? data.teeths : null,
      undercuts: data.undercuts ? data.undercuts : null,
      plates: data.plates ? data.plates : null,
      retentiondata: data.retentions ? data.retentions : null,
    });
  };

  return (
    <div className="CreatePatientCase2">
      <Home onClick={() => handleClick("/assessorhome")} />
      <BackComp onClick={() => handleClick("/uploadpatient")} />
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
        />
        <div className="teethBackground">
          <Teeth
            setMissingtooth={true}
            selectRest={{ selectrest: false }}
            DentureData={selectedData}
            setData={setData}
            click={(index) => console.log(`Clicked tooth ${index}`)}
            value={{ canEdit: true, visible: true }}
            selectPlate={{ view: false }}
            selectRetention={{ selectretention: false }}
          />
        </div>
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
        <div className="text">
          <h2 id="createAPatientCase2">Create a Patient Case</h2>
          <h1 id="steps2">
            step 3 : Select undercuts
            <br />
            step 4 : Click Create & Upload
          </h1>
        </div>
      </div>
      <div id="create1">
        {" "}
        {/* Fixed the id to be without the # symbol */}
        <CreateUploadButton
          Name="Create & Upload"
          Pagetogo="/uploadanswerandmaterial"
        />
      </div>
    </div>
  );
}

export default AssessorCreatePatientStep2;
