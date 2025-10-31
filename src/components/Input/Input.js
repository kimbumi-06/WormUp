
import "./Input.css";

export function Input({ value, onChange}) {


  return (
    <div>
      <input
        type="text"
        className="input"
        value={value}
        onChange={onChange}
      ></input>

    </div>
  );
}
