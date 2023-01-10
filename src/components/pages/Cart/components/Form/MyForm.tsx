import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../../../hooks';
import { clearCart } from '../../../../store/cartSlice';
import './MyForm.css';

export default function MyForm() {
  const REDIRECT_TIME = 3000;
  const CLEAR_CART_TIME = 300;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState(true);

  const [phone, setPhone] = useState('');
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState(true);

  const [adress, setAdress] = useState('');
  const [adressDirty, setAdressDirty] = useState(false);
  const [adressError, setAdressError] = useState(true);

  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState(true);

  const [card, setCard] = useState('');
  const [cardDirty, setCradDirty] = useState(false);
  const [cardError, setCardError] = useState(true);

  const [valid, setValid] = useState('');
  const [validDirty, setValidDirty] = useState(false);
  const [validError, setValidError] = useState(true);

  const [date, setDate] = useState('');
  const [dateDirty, setDateDirty] = useState(false);
  const [dateError, setDateError] = useState(true);
  const [canRedirect, setCanRedirect] = useState(false);

  const [cardLogo, setCardLogo] = useState(
    'https://cdn1.iconfinder.com/data/icons/cash-card-add-on/48/v-22-512.png',
  );

  const isActiveButton =
    !nameError &&
    !phoneError &&
    !adressError &&
    !emailError &&
    !cardError &&
    !validError &&
    !dateError;

  const changeRedirect = () => {
    if (isActiveButton) setCanRedirect(true);
  };

  useEffect(() => {
    if (canRedirect) {
      setTimeout(() => {
        navigate('/');
        setTimeout(() => {
          dispatch(clearCart(true));
        }, CLEAR_CART_TIME);
      }, REDIRECT_TIME);
    }
  });

  const blurHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  function checkNumber(currentValue: string, newValue: string) {
    const isNewValue = newValue.length > currentValue.length;
    if (isNewValue) {
      const currentValid = newValue;
      const currentArr = currentValid.split('');
      const last = currentValid.charCodeAt(currentArr.length - 1);
      if (last > 47 && last < 58) return true;
    } else {
      return true;
    }
    return false;
  }
  function checkMaxLength(
    value: string,
    maxLength: number,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    if (value.length < maxLength) setError(true);
    if (value.length === maxLength) setError(false);
    if (value.length <= maxLength) return true;
    return false;
  }
  const nameHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.target.value);
    if (e.target.value.split(' ').length < 2) {
      setNameError(true);
    } else {
      const allNames: string[] = e.target.value.split(' ');
      const isGood = allNames.every((item) => item.trim().length > 2);
      if (!isGood) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    }
  };
  const phoneHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhone(e.target.value);
    if (e.target.value[0] !== '+') {
      setPhoneError(true);
    } else {
      const currentNumber = e.target.value.split('').splice(1, e.target.value.length);
      const isNumbers = currentNumber.every((num) => typeof Number(num) === 'number');
      const isFullLeangth = currentNumber.length > 9;
      if (!(isNumbers && isFullLeangth)) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    }
  };
  const adressHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAdress(e.target.value);
    if (e.target.value.split(' ').length < 3) {
      setAdressError(true);
    } else {
      const allAdresses = e.target.value.split(' ');
      const isGood = allAdresses.every((item) => item.trim().length > 4);
      if (!isGood) {
        setAdressError(true);
      } else {
        setAdressError(false);
      }
    }
  };
  const emailHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
    const validateEmail = (emailString: string) =>
      String(emailString)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    if (!validateEmail(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const cardHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const current = e.target.value;
    const isMaxLength = checkMaxLength(current.split(' ').join(''), 16, setCardError);
    if (checkNumber(card, current) && isMaxLength) {
      const splitCardNumber = current.replace(/(\d{4}(?!\s))/g, '$1 ');
      if (current.length > card.length) {
        setCard(splitCardNumber);
      } else {
        setCard(current);
      }
      switch (current.split('')[0]) {
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
    }
  };
  const validHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValid = e.target.value;
    const isMaxLength = checkMaxLength(currentValid, 3, setValidError);
    if (checkNumber(valid, currentValid) && isMaxLength) setValid(currentValid);
  };
  const dateHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const current = e.target.value;
    function validateDate(stringDateate: string) {
      let isDate = false;
      const month = `${stringDateate[0]}${stringDateate[1]}`;
      if (Number(month.replace('0', '')) < 13) isDate = true;
      return isDate;
    }
    function divideDate(stringDateate: string) {
      const month = `${stringDateate[0]}${stringDateate[1]}`;
      const year = `${stringDateate[2]}${stringDateate[3]}`;
      return `${month}/${year}`;
    }
    const isMaxLength = checkMaxLength(current, 4, setDateError);
    if (checkNumber(date, current) && isMaxLength) {
      if (current.length === 4 && !current.includes('/')) {
        setDate(divideDate(current));
        if (!validateDate(current)) setDateError(true);
      } else {
        setDate(current);
      }
    }
  };
  return (
    <form className='form'>
      <h2 className='form-title'>Personal details</h2>
      <TextField
        sx={{ marginBottom: '1rem' }}
        fullWidth
        size='small'
        name='name'
        value={name}
        error={nameError && nameDirty}
        id='outlined-required'
        label='Full name'
        onChange={(e) => nameHandler(e)}
        onBlur={(e) => blurHandler(e)}
      />
      <TextField
        sx={{ marginBottom: '1rem' }}
        fullWidth
        size='small'
        name='phone'
        value={phone}
        error={phoneError && phoneDirty}
        id='outlined-required'
        label='Number'
        onChange={(e) => phoneHandler(e)}
        onBlur={(e) => blurHandler(e)}
      />
      <TextField
        sx={{ marginBottom: '1rem' }}
        fullWidth
        size='small'
        name='adress'
        value={adress}
        error={adressError && adressDirty}
        id='outlined-required'
        label='Adress'
        onChange={(e) => adressHandler(e)}
        onBlur={(e) => blurHandler(e)}
      />
      <TextField
        sx={{ marginBottom: '1rem' }}
        fullWidth
        size='small'
        name='email'
        value={email}
        error={emailError && emailDirty}
        id='outlined-required'
        label='E-mail'
        onChange={(e) => emailHandler(e)}
        onBlur={(e) => blurHandler(e)}
      />
      <h2 className='form-title'>Credit card details</h2>
      <div className='credit-card-container'>
        <div className='credit-card-row'>
          <img src={cardLogo} alt='card-logo' className='card-logo' />
          <div className='credit-card-input'>
            <TextField
              sx={{ marginBottom: '1rem' }}
              fullWidth
              size='small'
              name='card'
              value={card}
              error={cardError && cardDirty}
              id='outlined-required'
              label='Card number'
              onChange={(e) => cardHandler(e)}
              onBlur={(e) => blurHandler(e)}
            />
          </div>
        </div>
        <div className='credit-card-row'>
          <h3>CVV</h3>
          <div className='credit-card-input'>
            <TextField
              sx={{ marginBottom: '1rem' }}
              size='small'
              name='valid'
              value={valid}
              error={validError && validDirty}
              id='outlined-required'
              label='Code'
              onChange={(e) => validHandler(e)}
              onBlur={(e) => blurHandler(e)}
            />
          </div>
        </div>
        <div className='credit-card-row'>
          <h3>VALID</h3>
          <div className='credit-card-input'>
            <TextField
              sx={{ marginBottom: '1rem' }}
              size='small'
              name='date'
              value={date}
              error={dateError && dateDirty}
              id='outlined-required'
              label='Valid'
              onChange={(e) => dateHandler(e)}
              onBlur={(e) => blurHandler(e)}
            />
          </div>
        </div>
      </div>
      <Button variant='outlined' onClick={changeRedirect} disabled={!isActiveButton}>
        BYU
      </Button>
    </form>
  );
}
