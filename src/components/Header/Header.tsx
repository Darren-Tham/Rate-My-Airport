import "./Header.css";
import wave from "../../assets/wave.svg";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <h1>Rate My Airport</h1>
        </div>
        <div className="box">
          <img src={wave} alt="wave graphic" />
        </div>
      </div>
    </header>
  );
}
