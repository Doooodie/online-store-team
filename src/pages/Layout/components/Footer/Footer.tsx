import './Footer.css';
import RSSchoolLogo from '../../../../assets/img/rsschool-logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <nav className='container'>
        <ul className='layout-links'>
          <li className='rsschool-logo-container'>
            <a
              href='https://rs.school/js/'
              target='_blank'
              rel='noreferrer'
              className='rsschool-logo-link'
            >
              <img src={RSSchoolLogo} alt='RS School Logo' className='rsschool-logo' />
            </a>
          </li>
          <li className='author-info-container'>
            With ❤️ from&nbsp;
            <a
              href='https://github.com/Doooodie'
              target='_blank'
              rel='noreferrer'
              className='footer-link'
            >
              Doodie
            </a>
            &nbsp;and&nbsp;
            <a
              href='https://github.com/LineCoran'
              target='_blank'
              rel='noreferrer'
              className='footer-link'
            >
              LineCoran
            </a>
            , 2022
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
