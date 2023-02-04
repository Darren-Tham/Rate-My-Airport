import './Map.css';
import AirportModal from './AirportModal/AirportModal'

export default function Map() {
    return (
        <div className='parent'>
        <img src="src/assets/Map.svg" alt="Map of the United States"/>
        <AirportModal rating={"4/5"} acro={"ATL"} airportName={"Hartsfield"}/>
        </div>
    );
}