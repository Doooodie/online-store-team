import React, { useState } from 'react';
import './MyForm.css';

export default function MyForm() {
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState('Name is empty');

  const [phone, setPhone] = useState('');
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState('Phone is empty');

  const [adress, setAdress] = useState('');
  const [adressDirty, setAdressDirty] = useState(false);
  const [adressError, setAdressError] = useState('Adress is empty');

  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email is empty');

  const [card, setCard] = useState('');
  const [cardDirty, setCradDirty] = useState(false);
  const [cardError, setCardError] = useState('Card number is empty');

  const [valid, setvalid] = useState('');
  const [validDirty, setValidDirty] = useState(false);
  const [validError, setValidError] = useState('Code is empty');

  const [date, setDate] = useState('');
  const [dateDirty, setDateDirty] = useState(false);
  const [dateError, setDateError] = useState('Date is empty');

  const [cardLogo, setCardLogo] = useState(
    'https://cdn1.iconfinder.com/data/icons/cash-card-add-on/48/v-22-512.png',
  );

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'phone':
        setPhoneDirty(true);
        break;
      case 'adress':
        setAdressDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'card':
        setCradDirty(true);
        break;
      case 'valid':
        setValidDirty(true);
        break;
      case 'date':
        setDateDirty(true);
        break;
      default:
    }
  };
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.split(' ').length < 2) {
      setNameError('At least 2 words');
    } else {
      const allNames = e.target.value.split(' ');
      const isGood = allNames.every((item) => item.trim().length > 2);
      if (!isGood) {
        setNameError('Every word at least 3 symbols');
      } else {
        setNameError('');
      }
    }
  };
  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (e.target.value[0] !== '+') {
      setPhoneError('First symmbol is +');
    } else {
      const currentNumber = e.target.value.split('').splice(1, e.target.value.length);
      const isNumbers = currentNumber.every((num) => typeof Number(num) === 'number');
      const isFullLeangth = currentNumber.length > 9;
      if (!(isNumbers && isFullLeangth)) {
        setPhoneError('Invalid number');
      } else {
        setPhoneError('');
      }
    }
  };
  const adressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
    if (e.target.value.split(' ').length < 3) {
      setAdressError('At least 3 words');
    } else {
      const allAdresses = e.target.value.split(' ');
      const isGood = allAdresses.every((item) => item.trim().length > 4);
      if (!isGood) {
        setAdressError('Every word at least 3 symbols');
      } else {
        setAdressError('');
      }
    }
  };
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const validateEmail = (emailString: string) =>
      String(emailString)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    if (!validateEmail(e.target.value)) {
      setEmailError('invalid email');
    } else {
      setEmailError('');
    }
  };
  const cardHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardValue = e.target.value;
    if (cardValue.length < 17) {
      setCard(cardValue);
      switch (cardValue.split('')[0]) {
        case '3':
          setCardLogo(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png',
          );
          break;
        case '4':
          setCardLogo('https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png');
          break;
        case '5':
          setCardLogo(
            'https://www.mastercard.hu/content/dam/public/mastercardcom/eu/hu/images/mc-logo-52.svg',
          );
          break;
        default:
          setCardLogo('https://cdn1.iconfinder.com/data/icons/cash-card-add-on/48/v-22-512.png');
      }
      if (cardValue.length < 16) {
        setCardError('At least 16 numbers');
      } else {
        setCardError('');
      }
    }
  };

  const validHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValid = e.target.value;
    if (currentValid.length < 3) {
      setValidError('At least 3 numbers');
      setvalid(currentValid);
    } else if (currentValid.length === 3) {
      setValidError('');
      setvalid(currentValid);
    }
  };

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValid = e.target.value;
    if (currentValid.length < 4) {
      setDateError('At least 4 numbers');
      setDate(currentValid);
    } else if (currentValid.length === 4) {
      setDateError('');
      setDate(currentValid);
    }
  };

  return (
    <form className='form'>
      <h2 className='form-title'>Personal details</h2>
      {nameDirty && nameError && <div className='form-error'>{nameError}</div>}
      <input
        className='floating-label-input'
        placeholder='Your name'
        name='name'
        value={name}
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => nameHandler(e)}
      />
      {phoneDirty && phoneError && <div className='form-error'>{phoneError}</div>}
      <input
        className='floating-label-input'
        placeholder='Your phone'
        name='phone'
        value={phone}
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => phoneHandler(e)}
      />
      {adressDirty && adressError && <div className='form-error'>{adressError}</div>}
      <input
        className='floating-label-input'
        placeholder='Your adress'
        name='adress'
        value={adress}
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => adressHandler(e)}
      />
      {emailDirty && emailError && <div className='form-error'>{emailError}</div>}
      <input
        className='floating-label-input'
        placeholder='Your email'
        name='email'
        value={email}
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => emailHandler(e)}
      />
      <h2 className='form-title'>Credit card details</h2>
      <div className='credit-card-container'>
        <div className='credit-card-row'>
          <img src={cardLogo} alt='card-logo' className='card-logo' />
          <div className='credit-card-input'>
            {cardDirty && cardError && <div className='form-error'>{cardError}</div>}
            <input
              className='floating-label-input card-input'
              placeholder='Your card'
              name='card'
              value={card}
              type='number'
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => cardHandler(e)}
            />
          </div>
        </div>
        <div className='credit-card-row'>
          <h3>CVV</h3>
          <div className='credit-card-input'>
            {validDirty && validError && <div className='form-error'>{validError}</div>}
            <input
              className='floating-label-input valid-input'
              placeholder='Code'
              name='valid'
              value={valid}
              type='number'
              maxLength={3}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => validHandler(e)}
            />
          </div>
        </div>
        <div className='credit-card-row'>
          <h3>VALID</h3>
          <div className='credit-card-input'>
            {dateDirty && dateError && <div className='form-error'>{dateError}</div>}
            <input
              className='floating-label-input valid-input'
              placeholder='Valid Thrue'
              name='date'
              value={date}
              type='number'
              maxLength={3}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => dateHandler(e)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
