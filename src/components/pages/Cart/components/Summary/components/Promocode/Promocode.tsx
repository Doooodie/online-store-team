import React, { useState } from 'react';
import promocodesData from '../../../../../../../assets/json/promocodes.json';
import PromoResults from './components/PromoResults';

import './Promocode.css';

function Promocode() {
  const [value, setValue] = useState('');
  const [isPromoFound, setPromoFound] = useState(false);
  const [resultsText, setResultsText] = useState('');

  const searchPromo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const promoArr = promocodesData.codes;

    const queryResult = promoArr.find((promo) => promo.title === query.toUpperCase());

    if (queryResult) {
      setResultsText(queryResult.description);
      setPromoFound(true);
    } else {
      setPromoFound(false);
      setResultsText('');
    }

    setValue(query);
  };

  return (
    <div className='promo-container'>
      <input
        type='search'
        placeholder='Enter promocode'
        className='summary-promo-input'
        value={value}
        onChange={searchPromo}
      />
      {isPromoFound ? <PromoResults text={resultsText} /> : null}
    </div>
  );
}

export default Promocode;
