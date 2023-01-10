import { useAppDispatch, useAppSelector } from '../../../../../../../hooks';
import { addPromo } from '../../../../../../../store/promoSlice';
import promocodesData from '../../../../../../../../assets/json/promocodes.json';
import './PromoResults.css';

interface IPromoResults {
  text: string;
}

function PromoResults({ text }: IPromoResults) {
  const savedPromos = useAppSelector((state) => state.promo.codes);
  const dispatch = useAppDispatch();

  const savePromo = () => {
    const promoArr = promocodesData.codes;
    const query = promoArr.find((promo) => promo.description === text);
    dispatch(addPromo({ id: query?.id as number }));
  };

  return (
    <div className='promo-results'>
      <span className='promo-results-text'>{text}</span>
      <button type='button' className='buy-button promo-button' onClick={savePromo}>
        Add
      </button>
    </div>
  );
}

export default PromoResults;
