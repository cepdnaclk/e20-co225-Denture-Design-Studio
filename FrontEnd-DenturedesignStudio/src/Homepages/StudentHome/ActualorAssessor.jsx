import "./ActualorAssessor.css";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Teeth from "../../TeethComp/Teeth";
import html2canvas from "html2canvas";
function ActualorAssessor({ cancel, solve, userdata }) {
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState({
    restdata: null,
    missingteeth: null,
    undercuts: null,
    plates: null,
    clasps: null,
    retentiondata: null,
    gingivally: null,
  });
  const [missingteeth, setMissingteeth] = useState(Array(32).fill(false));
  const [genated, setgenarated] = useState(false);
  const autoRef = useRef(null);
  const handleActualcase = () => {
    navigate("/addSaddles", { state: { userdata } });
    solve();
  };

  const handleAutocase = () => {
    setgenarated(true);
    const numberofteeth = Math.floor(Math.random() * 11 + 3);
    const missingteeths = new Set();
    for (let index = 0; index < numberofteeth; index++) {
      missingteeths.add(Math.floor(Math.random() * 16) + 1);
      missingteeths.add(Math.floor(Math.random() * 16) + 17);
    }
    const missingteetharray = Array.from(missingteeths);
    missingteetharray.forEach((element) => {
      console.log(missingteeth[element - 1]);
      missingteeth[element - 1] = true;
      console.log(missingteeth[element - 1]);
    });
    setSelectedData({
      restdata: null,
      missingteeth: missingteeth,
      undercuts: null,
      plates: null,
      clasps: null,
      retentiondata: null,
      gingivally: null,
    });
    console.log(missingteeth);
    setTimeout(() => {
      html2canvas(autoRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        navigate("/addSaddles", { state: { userdata, imgData } });
        solve();
      });
    }, 5);
  };
  console.log(selectedData);
  return (
    <div>
      <div className="ActualorAssessor-overlay"></div>
      <div className="ActualorAssessor">
        <button className="genarate-btn" onClick={handleAutocase}>
          Genarate a Case
        </button>
        <button className="actual-btn" onClick={handleActualcase}>
          Actual Case
        </button>
        <button className="cancel-btn" onClick={cancel}>
          <HiOutlineX size={"3vw"} color="black" />
        </button>
        <div
          className="TeethBackground-auto"
          ref={autoRef}
          style={{ borderRadius: "1vw", top: "-200vh" }}
        >
          {genated && (
            <Teeth
              selectRest={{ selectrest: true }}
              DentureData={selectedData}
              setData={() => {}}
              value={{ canEdit: false, visible: true }}
              selectPlate={{ view: true }}
              selectRetention={{ selectretention: true }}
              selectClasp={{ view: true }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default ActualorAssessor;