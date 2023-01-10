import CartItems from '../../../Layout/components/Header/components/CartItems/CartItems';
import CartTotal from '../../../Layout/components/Header/components/CartTotal/CartTotal';
import * as React from 'react';
import Modal from '@mui/material/Modal';

import './Summary.css';
import MyForm from '../Form/MyForm';

function Summary() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className='summary-container'>
      <h2 className='summary-heading'>Summary</h2>
      <p className='summary-info'>
        <CartItems />
      </p>
      <p className='summary-info'>
        <CartTotal />
      </p>
      <input type='search' placeholder='Enter promocode' className='summary-promo-input' />
      <p className='summary-promo-info'>
        Promo for test: <strong>RS</strong>
      </p>
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
