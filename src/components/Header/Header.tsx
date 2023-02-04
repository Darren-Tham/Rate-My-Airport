import { useState, useEffect, useRef } from 'react'
import data from '../../assets/airports.json'
import "./Header.css";
import wave from "../../assets/wave.svg";

const AIRPORTS = data.map(({ NAME }) => NAME)

export default function Header() {
  const [userInput, setUserInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null);

  function getDropDownTop() {
    const marginBottom = 10
    const inputElem = inputRef.current
    if (inputElem === null) throw 'inputElem is null'
    const { offsetHeight, offsetTop } = inputElem
    return offsetHeight + offsetTop + marginBottom
  }

  function renderDropDown() {
    return (
      <div className="header-input-dropdown" style={{ top: `${getDropDownTop()}px` }}>
        Hello 
      </div>
    ) 
  }

  return (
    <header>
      <div className="header-container">
        <div className="box">
          <img src={wave} alt="wave graphic" />
        </div>
        <div className="header-content">
          <h1>RATE MY AIRPORT</h1>
          <span className="header-command">Find an <b>Airport</b></span>
          <input
            className="header-input"
            type="text"
            placeholder="Airport Name"
            ref={inputRef}
            onChange={e => setUserInput(e.target.value)}
          />
          {userInput.length > 0 && renderDropDown()}
        </div>
      </div>
    </header>
  )
}
