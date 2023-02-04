import './ReviewGauges.css'

interface Props {
  onClick: (index: number) => void;
}

const ReviewGauges = ({ onClick }: Props) => {
  const buttons = Array.from({ length: 5 }, (_, index) => (
    <button key={index} onClick={() => onClick(index)} className='rating-button'/>
  ));

  return (
        <div className="review-gauge">
            <div>{buttons}</div>
        </div>
  );
};

export default ReviewGauges;

