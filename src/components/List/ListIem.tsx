import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { ItemProps } from './itemList.type';

export const ItemList: React.FC<ItemProps> = ({
  avatar,
  title,
  description,
}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={title} src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={description} />
    </ListItem>
  );
};
