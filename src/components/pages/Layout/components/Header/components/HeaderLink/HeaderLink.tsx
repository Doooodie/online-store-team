import { Link } from 'react-router-dom';
import './HeaderLink.css';

function HeaderLink(props: { href: string; src: string }) {
  const { href, src } = props;

  return (
    <Link to={href} className='header-img-container'>
      <img src={src} alt='buy' className='header-img' />
    </Link>
  );
}

export default HeaderLink;
