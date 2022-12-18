import HeaderLink from './components/HeaderLink/HeaderLink';
import CartItems from './components/CartItems/CartItems';
import CartTotal from './components/CartTotal/CartTotal';

import shoppingBag from '../../../../assets/img/shopping-bag.png';
import shoppingCart from '../../../../assets/img/shopping-cart.png';

import './Header.css';

function Header() {
  return (
    <header className='header'>
      <nav className='container'>
        <ul className='layout-links'>
          <li>
            <HeaderLink href='/' src={shoppingBag} />
          </li>
          <li>
            <CartItems />
          </li>
          <li>
            <CartTotal />
          </li>
          <li>
            <HeaderLink href='/cart' src={shoppingCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
