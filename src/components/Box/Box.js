import "../../style/style.css"
import "./Box.css"

import greenworm from "../../components/image/greenworm.png";

import {ChooseButton} from "../Button/Button.js"

export function Box1() {
    

    return (
      <div className="box1">
        <p className="new-text">Solo Play</p>
        <p className="text2">
          <span className="highlight">나만의 러닝 목표</span>를 세우고 <br/>
          페이스를 늘려 지렁이를 키워보세요
        </p>

        <img src={greenworm} alt="지렁이" />

        <ChooseButton />
      </div>
    );

}