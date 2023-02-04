export interface ModalInfo {
    rating: number;
    acro: string;
    airportName: string;
}

function AirportModal(prop:ModalInfo) {
    let rating = prop.rating;
    let acro = prop.acro;
    let airportName = prop.airportName;
    return (
        <div className="modal">
            <p>{rating}</p>
            <p>{acro}</p>
            <p>{airportName}</p>
        </div>
    );
}


export default function Modal() {
    return (
        <div>
            <AirportModal rating={4} acro={"ATL"} airportName={"Hartsfield"}  /> 
        </div>
    );
}