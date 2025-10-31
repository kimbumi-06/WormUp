import React, { useEffect, useState } from "react";
//import { NameInput } from "../../Input/Input.js";
import wormup from "../../components/image/wormup.svg";


import "../../style/style.css"

import {Box1} from "../../components/Box/Box.js"

function StartPage() {

  return (
    <div className="bg">
      <img src={wormup} alt="내 로고" />
      <div>
        <p className="text1">러닝 시작하기</p>
        <p className="text2">게임 모드를 선택하세요.</p>
      </div>
      <Box1></Box1>
    </div>
  );
}

export default StartPage;
