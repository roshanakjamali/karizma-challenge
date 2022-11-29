import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

import { ItemProps } from './itemList.type';

export const ItemList: React.FC<ItemProps> = ({
  avatar,
  title,
  description,
  clickHandler,
}) => {
  return (
    <ListItemButton onClick={clickHandler}>
      <ListItemAvatar>
        <Avatar alt={title} src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={description} />
    </ListItemButton>
  );
};
