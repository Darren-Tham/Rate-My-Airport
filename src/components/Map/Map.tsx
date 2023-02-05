import './Map.css';
import AirportModal from './AirportModal/AirportModal'

export default function Map() {
  return (
    <div className='parent'>
      <img src="src/assets/Map.svg" alt="Map of the United States"/>
      <AirportModal rating={"4/5"} acro={"ATL"} airportName={"Hartsfield"}/>
      <span className="dot" id='jfk'></span>   
      <span className="dot" id='lax'></span>
      <span className="dot" id='atl'></span>
    </div>
  )
}