import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getUsersAsync } from '../../features/users/usersSlice';
import { addToFavorites } from '../../features/favorites/favoritesSlice';

import { List } from '../../components/List';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function UserList() {
  const dispatch = useAppDispatch();
  const { users, status } = useAppSelector((state) => ({
    users: state.users.collection,
    status: state.users.status,
  }));

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return status === 'loading' ? (
    <Loading />
  ) : status === 'failed' ? (
    <Error message='Try Again' />
  ) : (
    <List
      collection={users.map(({ username, email, id }) => ({
        title: username,
        description: email,
        key: id,
        clickHandler: () => dispatch(addToFavorites(username)),
      }))}
    />
  );
}

export { UserList };
