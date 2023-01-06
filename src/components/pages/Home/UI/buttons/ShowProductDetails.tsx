import React from 'react';
import { Link } from 'react-router-dom';
import './productCardButton.css';

interface ShowProductDetailsProps {
  id: number;
}

const ShowProductDetails: React.FC<ShowProductDetailsProps> = function ShowProductDetails({ id }) {
  return (
    <Link className='product-card-button' to={`/product-details/${id}`}>
      Details
    </Link>
  );
};

export default ShowProductDetails;
