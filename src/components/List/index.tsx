import MUIList from '@mui/material/List';

import { ItemProps } from './itemList.type';
import { ItemList } from './ListIem';

const List: React.FC<{ collection: ItemProps[] | [] }> = ({ collection }) => {
  return (
    <MUIList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {collection.map(ItemList)}
    </MUIList>
  );
};

export { List };
