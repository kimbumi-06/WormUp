
//import { NameInput } from "../../Input/Input.js";
import wormup from "../../components/image/wormup.svg";

import "../../style/style.css";


function SoloPage() {
    const text1 = "< Solo Play >"
    const text2 = "내 정보를 입력하고 러닝을 시작하세요.\n목표 설정이 어려울 경우, 웜업이 목표를 추천해줘요"

  return (
    <div className="bg">
      <img src={wormup} alt="내 로고" />
      <div>
        <p className="text1">{text1}</p>
        <p className="text2">{text2}</p>
      </div>
    </div>
  );
}

export default SoloPage;
