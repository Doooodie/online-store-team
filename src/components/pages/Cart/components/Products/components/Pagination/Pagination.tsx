import { URLSearchParamsInit, NavigateOptions } from 'react-router-dom';
import { useAppSelector } from '../../../../../../hooks';
import './Pagination.css';

type SetURLSearchParams = (
  nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit),
  navigateOpts?: NavigateOptions,
) => void;

interface IPagination {
  limit: number;
  page: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSearchParams: SetURLSearchParams;
}

function Pagination({ limit, page, setLimit, setPage, setSearchParams }: IPagination) {
  const productsLength = useAppSelector((state) => state.cart.products).length;
  const params = {
    page: page.toString(),
    limit: limit.toString(),
  };

  const prevPage = () => {
    const newPage = page - 1;
    params.page = newPage.toString();
    setSearchParams(params);
    return page > 1 && setPage(newPage);
  };
  const nextPage = () => {
    const newPage = page + 1;
    params.page = newPage.toString();
    setSearchParams(params);
    return page < productsLength / limit && setPage(newPage);
  };
  const changeLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    params.limit = e.target.value;
    setSearchParams(params);
    setLimit(+e.target.value);
  };

  return (
    <div className='header-controls'>
      <div className='products-limit'>
        <span className='controls-text'>Limit: </span>
        <input
          type='number'
          min='1'
          max={productsLength}
          value={limit}
          onChange={changeLimit}
          className='limit-input'
        />
      </div>
      <div className='products-pagination'>
        <span className='controls-text'>Page: </span>
        <button type='button' className='pagination-button' onClick={prevPage}>
          &lt;
        </button>
        <span className='pagination-number'>{page}</span>
        <button type='button' className='pagination-button' onClick={nextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
