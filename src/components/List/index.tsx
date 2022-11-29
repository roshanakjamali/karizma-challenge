import MUIList from '@mui/material/List';

import { ItemProps } from './itemList.type';
import { ItemList } from './ListIem';

const List: React.FC<{ collection: ItemProps[] | [] }> = ({ collection }) => {
  return (
    <MUIList>
      {collection.map(({ key, ...props }) => (
        <ItemList key={key} {...props} />
      ))}
    </MUIList>
  );
};

export { List };
