import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
   <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 15, marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: 400 }}>
            <TextField
                label="Search books"
                variant="outlined"
                size="small"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
            />
            <IconButton onClick={handleSearch} color="primary">
                <SearchIcon />
            </IconButton>
        </div>
    </div>
  );
};

export default SearchBar;
