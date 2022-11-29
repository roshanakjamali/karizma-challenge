import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';

export const CustomColumn = styled(Paper)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(4)})`,
  maxHeight: `calc(100vh - ${theme.spacing(4)})`,
  overflow: 'auto',
  margin: theme.spacing(2, 0),
  padding: theme.spacing(4),
}));
