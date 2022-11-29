import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          backgroundColor: '#eaeaea',
        },
      }),
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'stretch',
        },
      },
    },
  },
});
export default theme;
