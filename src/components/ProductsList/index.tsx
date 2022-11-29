import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getProductsAsync } from '../../features/products/productsSlice';
import { addToFavorites } from '../../features/favorites/favoritesSlice';

import { List } from '../List';
import Loading from '../Loading';
import Error from '../Error';

function ProductsList() {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector((state) => ({
    products: state.products.collection,
    status: state.products.status,
  }));

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return status === 'loading' ? (
    <Loading />
  ) : status === 'failed' ? (
    <Error message='Try Again' />
  ) : (
    <List
      collection={products.map(({ title, description, image, id }) => ({
        title,
        description,
        avatar: image,
        key: id,
        clickHandler: () => dispatch(addToFavorites(title)),
      }))}
    />
  );
}

export { ProductsList };
