import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search({ searchQuery, setSearchQuery }) {
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <TextField
                InputProps={{
                    style: {
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '15px',
                        minWidth: '450px',
                        height: '40px',
                    },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default Search;
