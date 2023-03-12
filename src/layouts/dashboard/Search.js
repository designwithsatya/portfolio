import React from 'react';
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import Iconify from '../../components/Iconify';

export const Search = () => {
  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: 0.8 }}>
              <Iconify color="#637381" icon="ic:baseline-search" />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          placeholder="Search"
        />
      </FormControl>
    </Box>
  );
};
