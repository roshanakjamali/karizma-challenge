import Grid from '@mui/material/Grid';

import Column from './components/Column';
import { UserList } from './components/UsersList';

function App() {
  return (
    <Grid container spacing={4} alignItems='stretch'>
      <Grid item xs={12} md={4}>
        <Column>
          <UserList />
        </Column>
      </Grid>
      <Grid item xs={12} md={4}>
        <Column>Second</Column>
      </Grid>
      <Grid item xs={12} md={4}>
        <Column>Third</Column>
      </Grid>
    </Grid>
  );
}

export default App;
