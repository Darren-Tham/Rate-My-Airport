import './ReviewPage.css'
import ReviewGauges from './ReviewGauges/ReviewGauges';

export default function ReviewPage() {
    return (
        <div className='whole-page'>
            <div className='rating'>
                <p>5.0 test</p>
            </div>
            <div className='review-description'> 
                <textarea></textarea>
            </div>
            <div className='review-options'>
                <p>Cleanliness</p>
                <ReviewGauges onClick={handleInfo}/>
                <p>Amendities</p>
                <ReviewGauges onClick={handleInfo}/>
                <p>Effiency</p>
                <ReviewGauges onClick={handleInfo}/>
                <p>Reputation</p>
                <ReviewGauges onClick={handleInfo}/>
            </div>
        </div>
    );
}

const handleInfo = (index: number) => {
    let value = index;
};