import { useState, useEffect, useRef } from 'react'
import data from '../../assets/airports.json'
import "./Header.css";
import wave from "../../assets/wave.svg";
import rma from '../../assets/ratemyairport.png'

const AIRPORTS = data.map(({ NAME, CITY }) => ({ NAME, CITY }))

export default function Header() {
  const [userInput, setUserInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null);

  function getDropDownTop() {
    const marginBottom = 5
    const inputElem = inputRef.current
    if (inputElem === null) throw 'inputElem is null'
    const { offsetHeight, offsetTop } = inputElem
    return offsetHeight + offsetTop + marginBottom
  }

  function renderDropDown() {
    return (
      <div className="header-input-dropdown" style={{ top: `${getDropDownTop()}px` }}>
        {AIRPORTS
          .filter(({ NAME }) => NAME.toLowerCase().includes(userInput.toLowerCase()))
          .map(({ NAME, CITY }) => (
            <button className="header-input-dropdown-element">
              <span className="header-input-dropdown-element-name">{NAME}</span>
              <span className="header-input-dropdown-element-city">{CITY}</span>
            </button>
        ))}
      </div>
    ) 
  }

  return (
    <header>
      <div className="header-container">
        <img className="header-img" src={wave} alt="wave graphic" />
        <div className="header-content">
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
