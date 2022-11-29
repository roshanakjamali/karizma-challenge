import Grid from '@mui/material/Grid';

import Column from './components/Column';
import { ProductsList } from './components/ProductsList';
import { SelectedList } from './components/SelectedList';
import { UserList } from './components/UsersList';

const gridProps = { item: true, xs: 12, md: 4 };

function App() {
  return (
    <Grid container spacing={4} alignItems='stretch'>
      <Grid {...gridProps}>
        <Column>
          <UserList />
        </Column>
      </Grid>
      <Grid {...gridProps}>
        <Column>
          <ProductsList />
        </Column>
      </Grid>
      <Grid {...gridProps}>
        <Column>
          <SelectedList />
        </Column>
      </Grid>
    </Grid>
  );
}

export default App;
