import "../Button/Button.css"
import "../../style/style.css"


import { useNavigate } from "react-router-dom";


export function ChooseButton() {

    const navigate = useNavigate();
    const handleStart = () => {
    navigate("/solo");
    };


    return (
      <div className="choose-btn" onClick={handleStart}>
        <p className="text3">선택하기</p>
      </div>
    );
}

export function StartButton() {
    const navigate = useNavigate();
    const handleStart = () => {
      navigate("/game");
    };

    return (
      <div className="start-btn" onClick={handleStart}>
        <p className="text3">시작</p>
      </div>
    );
}