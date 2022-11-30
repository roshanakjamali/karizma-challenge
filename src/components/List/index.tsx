import { useState } from 'react';
import MUIList from '@mui/material/List';

import { ItemProps } from './itemList.type';
import { ItemList } from './ListIem';
import { SearchList } from './SearchList';

const List: React.FC<{
  collection: ItemProps[] | [];
  searchOn?: 'title' | 'description';
}> = ({ collection, searchOn }) => {
  const [list, setList] = useState(collection);

  const onFilter = (search: string) => {
    if (!search.length) {
      setList([...collection]);
      return;
    }

    setList(
      collection.filter((item) =>
        item[searchOn!].toLocaleLowerCase().includes(search)
      )
    );
  };

  return (
    <>
      {searchOn && <SearchList handleFilter={onFilter} />}
      <MUIList>
        {list.map(({ key, ...props }) => (
          <ItemList key={key} {...props} />
        ))}
      </MUIList>
    </>
  );
};

export { List };
