import { useState } from 'react';
import './Pagination.css';

function Pagination() {
  const [value, setValue] = useState('1');

  return (
    <div className='header-controls'>
      <div className='products-limit'>
        <span className='controls-text'>Limit: </span>
        <input
          type='number'
          min='1'
          max='10'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='limit-input'
        />
      </div>
      <div className='products-pagination'>
        <span className='controls-text'>Page: </span>
        <button type='button' className='pagination-button'>
          &lt;
        </button>
        <span className='pagination-number'>1</span>
        <button type='button' className='pagination-button'>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
