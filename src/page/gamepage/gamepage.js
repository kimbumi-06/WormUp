
import wormup from "../../components/image/wormup.svg";

import "../../style/style.css";


function GamePage() {
  return (
    <div className="bg">

      <img src={wormup} alt="내 로고" />
      
      <div>
        <p className="text1">러닝 시작하기</p>
        <p className="text2">게임 모드를 선택하세요.</p>
      </div>

    </div>
  );
}

export default GamePage;
