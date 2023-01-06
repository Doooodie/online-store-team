import { Link, useParams } from 'react-router-dom';
import productsData from '../../../assets/json/products.json';
import DetailsPhotos from './components/DetailsPhotos/DetailsPhotos';
import DetailsInfo from './components/DetailsInfo/DetailsInfo';
import AddToCartButton from '../Home/UI/buttons/AddToCartButton';

import './ProductDetails.css';

function ProductDetails() {
  const params = useParams();
  const queryId = Number(params.id);
  const product = productsData.products.find((item) => item.id === queryId);

  if (!product)
    return (
      <main className='main'>
        <div className='container no-page-container'>
          <h1 className='no-page-header'>The product with id {params.id} does not exist 😔</h1>
        </div>
      </main>
    );

  return (
    <main className='main'>
      <div className='container'>
        <aside className='breadcrumbs'>
          <Link to='/' className='breadcrumbs-link'>
            Store
          </Link>
          <span>&gt;</span>
          <span>{product.category}</span>
          <span>&gt;</span>
          <span>{product.brand}</span>
          <span>&gt;</span>
          <span>{product.title}</span>
        </aside>

        <section className='product-details-container'>
          <div className='details-top'>
            <h1 className='details-heading'>{product.title}</h1>
          </div>
          <hr className='details-separator' />
          <div className='details-bottom'>
            <DetailsPhotos images={product.images} />

            <div className='details-info'>
              <DetailsInfo heading='Description' details={product.description} />
              <DetailsInfo heading='Discount' details={product.discountPercentage} />
              <DetailsInfo heading='Rating' details={product.rating} />
              <DetailsInfo heading='Stock' details={product.stock} />
              <DetailsInfo heading='Brand' details={product.brand} />
              <DetailsInfo heading='Category' details={product.category} />
            </div>

            <div className='details-buy'>
              <h2 className='buy-price'>€{product.price}</h2>
              <AddToCartButton id={product.id} price={product.price} className='buy-button' />
              <button type='button' className='buy-button'>
                Buy now
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;
