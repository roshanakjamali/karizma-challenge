import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Error({ message }: { message: string }) {
  return (
    <Box display='flex' alignItems='center'>
      <Typography variant='h6' display='inline' color='error'>
        {message}
      </Typography>
    </Box>
  );
}
