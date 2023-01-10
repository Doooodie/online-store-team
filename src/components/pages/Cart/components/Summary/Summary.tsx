import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Promocode from './components/Promocode/Promocode';
import CartItems from '../../../Layout/components/Header/components/CartItems/CartItems';
import SummaryTotal from './components/SummaryTotal/SummaryTotal';
import promocodesData from '../../../../../assets/json/promocodes.json';

import './Summary.css';
import MyForm from '../Form/MyForm';

function Summary() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <p className='summary-info'>
        <SummaryTotal />
      </p>
      <Promocode />
      <p className='summary-promo-info'>Promo for test: {promosList}</p>
      <button onClick={handleOpen} type='button' className='buy-button summary-button'>
        Buy Now
      </button>
      <Modal open={open} onClose={handleClose}>
        <MyForm />
      </Modal>
    </section>
  );
}

export default Summary;
