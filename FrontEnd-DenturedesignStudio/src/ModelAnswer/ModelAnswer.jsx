import "./ModelAnswer.css";
import { useNavigate } from "react-router-dom";
import Home from "E:/e20-co225-Denture-Design-Studio/FrontEnd-DenturedesignStudio/src/homebutton/home.jsx";
import BackButton2 from "E:/e20-co225-Denture-Design-Studio/FrontEnd-DenturedesignStudio/src/BackButton2/BackButton2.jsx";

function ModelAnswer() {
  let navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }
  return (
    <div className="ModelAnswePage">
      <Home onClick={() => handleClick("/studenthome")}></Home>
      <BackButton2 onClick={() => handleClick("/back")}></BackButton2>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
      />

      <h1 className="ModelAnswerHeader">
        You Have successfully solved the case!
      </h1>
      <h4 className="YourAnswer">Your Answer:</h4>
      <div className="TeethBackground"></div>
      <div className="ModelAnswerbuttons">
        <button className="ModelAnswerButton" id="ViewAnswer">
          View Answer
        </button>
        <button className="ModelAnswerButton" id="DownloadAnswer">
          Download Your Answer
        </button>
        <button className="ModelAnswerButton" id="Finish">
          Finish
        </button>
      </div>
    </div>
  );
}
export default ModelAnswer;
