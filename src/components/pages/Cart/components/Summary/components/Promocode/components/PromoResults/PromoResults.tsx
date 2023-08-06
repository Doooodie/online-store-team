import { useAppDispatch, useAppSelector } from '../../../../../../../../hooks';
import { addPromo } from '../../../../../../../../store/promoSlice';
import promocodesData from '../../../../../../../../../assets/json/promocodes.json';

import './PromoResults.css';

interface IPromoResults {
  text: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setPromoFound: React.Dispatch<React.SetStateAction<boolean>>;
}

function PromoResults({ text, setInputValue, setPromoFound }: IPromoResults) {
  const savedPromos = useAppSelector((state) => state.promo.codes);
  const dispatch = useAppDispatch();

  const promoArr = promocodesData.codes;
  const query = promoArr.find((promo) => promo.description === text);
  const isApplied = savedPromos.find((promo) => promo.id === query?.id);

  const savePromo = () => {
    dispatch(addPromo({ id: query?.id as number, discount: query?.discountPercentage as number }));
    setPromoFound(false);
    setInputValue('');
  };

  const promoButton = (
    <button type='button' className='buy-button promo-button' onClick={savePromo}>
      Add
    </button>
  );

  return (
    <div className='promo-results'>
      <span className='promo-results-text'>{text}</span>
      {isApplied ? null : promoButton}
    </div>
  );
}

export default PromoResults;
