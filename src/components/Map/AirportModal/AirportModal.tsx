import './AirportModal.css'

export interface ModalInfo {
    rating: string;
    acro: string;
    airportName: string;
}

function AirportModal(prop:ModalInfo) {
    let rating = prop.rating;
    let acro = prop.acro;
    let airportName = prop.airportName;
    return (
        <div className="modal">
            <div className='top-section-modal'>
            <p>{rating}</p>
            <p>{acro}</p>
            </div>
            <div>
            <p>{airportName}</p>
            </div>
            <button>Reviews</button>
        </div>
    );
}


export default AirportModal; 

// {
//     return (
//         <div>
//             <AirportModal rating={4} acro={"ATL"} airportName={"Hartsfield"}  /> 
//         </div>
//     );
// }