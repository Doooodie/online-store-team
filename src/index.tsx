import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Layout from './components/Layout/Layout';
import NoPage from './components/NoPage/NoPage';
import Home from './components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
