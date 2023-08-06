import './DetailsInfo.css';

interface IDetailsInfo {
  heading: string;
  details: string | number;
}

function DetailsInfo({ heading, details }: IDetailsInfo) {
  return (
    <div className='info-container'>
      <h3 className='info-heading'>{heading}:</h3>
      <p className='info-details'>{details}</p>
    </div>
  );
}

export default DetailsInfo;
