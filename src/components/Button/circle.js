import "../../style/style.css"
import "../Button/Button.css"

export function Circle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
    >
      <circle className="start-circle-bg" />
      <p className="text3">시작</p>
    </svg>
  );
}
