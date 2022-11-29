import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { removeFromFavorites } from '../../features/favorites/favoritesSlice';

function SelectedList() {
  const dispatch = useAppDispatch();
  const collection = useAppSelector((state) => state.favorites.collection);

  return (
    <>
      {collection.map(({ label, idx }) => (
        <Box
          marginX={1}
          marginTop={2}
          display='inline-block'
          key={`${idx}-${label}`}
        >
          <Chip
            label={label}
            onClick={() => dispatch(removeFromFavorites(idx))}
            color='primary'
          />
        </Box>
      ))}
    </>
  );
}

export { SelectedList };
