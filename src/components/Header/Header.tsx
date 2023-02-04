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
    const marginBottom = 10
    const inputElem = inputRef.current
    if (inputElem === null) throw 'inputElem is null'
    const { offsetHeight, offsetTop } = inputElem
    return offsetHeight + offsetTop + marginBottom
  }

  function renderDropDown() {
    return (
      <div className="header-input-dropdown" style={{ top: `${getDropDownTop()}px` }}>
        {AIRPORTS.map(({ NAME, CITY }) => (
          <button className="header-input-dropdown-element">
            <span>{NAME}</span>
            <span>{CITY}</span>
          </button>
        ))}
      </div>
    ) 
  }

  return (
    <header>
      <div className="header-container">
        <img src={wave} alt="wave graphic" />
        <div className="header-content">
          <img className="logo" src={rma} />
          {/* <span className="header-command">Find an <b>Airport</b></span> */}
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
