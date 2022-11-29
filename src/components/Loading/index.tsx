import { CircularProgress, Box, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Box display='flex' alignItems='center'>
      <CircularProgress size='24px' style={{ marginRight: 12 }} />
      <Typography variant='h6' display='inline'>
        loading data ...
      </Typography>
    </Box>
  );
}
