import { useAppDispatch, useAppSelector } from '../../../../../../../../hooks';
import { removePromo } from '../../../../../../../../store/promoSlice';
import promocodesData from '../../../../../../../../../assets/json/promocodes.json';

import './AppliedPromos.css';

function AppliedPromos() {
  const savedPromos = useAppSelector((state) => state.promo.codes);
  const dispatch = useAppDispatch();

  const AppliedPromosComponents = savedPromos.map((promo) => {
    const promoArr = promocodesData.codes;
    const thisPromo = promoArr.find((code) => code.id === promo.id);

    return (
      <div key={promo.id} className='applied-promo'>
        <span key={promo.id + 1} className='applied-promo-description'>
          {thisPromo?.description}
        </span>
        <button
          key={promo.id + 2}
          type='button'
          className='buy-button promo-button drop-button'
          onClick={() => dispatch(removePromo({ id: promo.id, discount: promo.discount }))}
        >
          Drop
        </button>
      </div>
    );
  });

  const component = (
    <div className='applied-promos'>
      <h3 className='applied-promos-heading'>Applied codes</h3>
      <hr className='apllied-promos-line' />
      {AppliedPromosComponents}
    </div>
  );

  return savedPromos.length ? component : null;
}

export default AppliedPromos;
