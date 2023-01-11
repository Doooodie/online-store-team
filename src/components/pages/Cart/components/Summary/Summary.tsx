import React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { changeModalVisibility } from '../../../../store/modalSlice';
import Promocode from './components/Promocode/Promocode';
import CartItems from '../../../Layout/components/Header/components/CartItems/CartItems';
import SummaryTotal from './components/SummaryTotal/SummaryTotal';
import promocodesData from '../../../../../assets/json/promocodes.json';
import './Summary.css';
import MyForm from '../Form/MyForm';

function Summary() {
  const isModalOpened = useAppSelector((state) => state.modal.isOpened);
  const dispatch = useAppDispatch();
  const handleOpen = () => dispatch(changeModalVisibility({ isOpened: true }));
  const handleClose = () => dispatch(changeModalVisibility({ isOpened: false }));

  const promosList = promocodesData.codes.map((promo, index) => {
    if (index < promocodesData.codes.length - 1)
      return (
        <React.Fragment key={promo.id}>
          <strong key={promo.id + 1}>{promo.title}</strong>
          <span key={promo.id + 2}>, </span>
        </React.Fragment>
      );
    return <strong key={promo.id}>{promo.title}</strong>;
  });

  return (
    <section className='summary-container'>
      <h2 className='summary-heading'>Summary</h2>
      <p className='summary-info'>
        <CartItems />
      </p>
      <p className='summary-info summary-total'>
        <SummaryTotal />
      </p>
      <Promocode />
      <p className='summary-promo-info'>Promo for test: {promosList}</p>
      <button onClick={handleOpen} type='button' className='buy-button summary-button'>
        Buy Now
      </button>
      <Modal open={isModalOpened} onClose={handleClose}>
        <Box>
          <MyForm />
        </Box>
      </Modal>
    </section>
  );
}

export default Summary;
