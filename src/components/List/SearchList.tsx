import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchList: React.FC<{ handleFilter: (value: string) => void }> = ({
  handleFilter,
}) => {
  const [search, setSearch] = useState('');

  const onChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
    handleFilter(value.toLocaleLowerCase());
  };

  return (
    <>
      <Box mt={2}>
        <TextField
          fullWidth
          value={search}
          variant='outlined'
          placeholder='Search...'
          onChange={onChangeHandler}
        />
      </Box>
    </>
  );
};

export { SearchList };
