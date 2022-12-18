import { Link } from 'react-router-dom';
import './HeaderLink.css';

function HeaderLink(props: { href: string; src: string }) {
  const { href, src } = props;
  const alt = src.split('/')[3].split('.')[0];

  return (
    <Link to={href} className='header-img-container'>
      <img src={src} alt={alt} className='header-img' />
    </Link>
  );
}

export default HeaderLink;
