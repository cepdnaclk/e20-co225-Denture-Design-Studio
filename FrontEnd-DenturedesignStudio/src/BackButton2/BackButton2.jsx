import back from "E:/e20-co225-Denture-Design-Studio/FrontEnd-DenturedesignStudio/src/BackButton2/BackButton2.png";
import "./BackButton2.css";
function BackButton2({ onclick }) {
  return (
    <div>
      <button className="BackButton2" onClick={onclick}>
        <img src={back} alt="back button" />
      </button>
    </div>
  );
}
export default BackButton2;
