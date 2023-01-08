import './Summary.css';

function Summary() {
  return (
    <section className='summary-container'>
      <h2 className='summary-heading'>Summary</h2>
      <p className='summary-info'>
        Products: <strong>10</strong>
      </p>
      <p className='summary-info'>
        Tolal: <strong>€100</strong>
      </p>
      <input type='search' placeholder='Enter promocode' className='summary-promo-input' />
      <p className='summary-promo-info'>
        Promo for test: <strong>RS</strong>
      </p>
      <button type='button' className='buy-button summary-button'>
        Buy Now
      </button>
    </section>
  );
}

export default Summary;
