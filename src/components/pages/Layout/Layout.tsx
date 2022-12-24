import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './Layout.css';

function Layout() {
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
