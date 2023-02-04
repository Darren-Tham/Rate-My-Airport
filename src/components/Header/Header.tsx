import data from '../../assets/airports.json'
import "./Header.css";
import wave from "../../assets/wave.svg";

// const AIRPORTS = data.map()

export default function Header() {

  return (
    <header>
      <div className="header-container">
        <div className="box">
          <img src={wave} alt="wave graphic" />
        </div>
        <div className="header-content">
          <h1></h1>
          {/* <h1>RATE MY AIRPORT</h1> */}
          {/* <span className="header-command">Find an <b>Airport</b></span> */}
          <input className="header-input" type="text" placeholder="Airport Name"/>

        </div>
      </div>
    </header>
  )
}
