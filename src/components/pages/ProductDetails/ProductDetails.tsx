import { useParams } from 'react-router-dom';
import products from '../../../assets/json/products.json';

import './ProductDetails.css';

function ProductDetails() {
  const params = useParams();
  const queryId = Number(params.id);
  const product = products.products[queryId];
  return <div>{product.brand}</div>;
}

export default ProductDetails;
