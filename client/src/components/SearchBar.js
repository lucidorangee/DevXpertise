import React from 'react';
import { TextInput } from 'grommet';

function SearchBar({ onChange }){
    return(
        <TextInput
        placeholder="Search..."
        onChange={(event) => onChange(event.target.value)}
        />
    );
}

export default SearchBar;