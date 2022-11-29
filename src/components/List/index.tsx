import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MUIList from '@mui/material/List';
import TextField from '@mui/material/TextField';

import { ItemProps } from './itemList.type';
import { ItemList } from './ListIem';

const List: React.FC<{
  collection: ItemProps[] | [];
  searchOn?: 'title' | 'description';
}> = ({ collection, searchOn }) => {
  const [list, setList] = useState(collection);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!searchOn) return;

    if (!search) {
      setList([...collection]);
      return;
    }

    setList(collection.filter((item) => item[searchOn].includes(search)));
  }, [collection, search, searchOn]);

  return (
    <>
      <Box mt={2}>
        <TextField
          fullWidth
          variant='outlined'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <MUIList>
        {list.map(({ key, ...props }) => (
          <ItemList key={key} {...props} />
        ))}
      </MUIList>
    </>
  );
};

export { List };
