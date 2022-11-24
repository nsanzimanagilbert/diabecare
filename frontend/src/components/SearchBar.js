import React from 'react'
import {Autocomplete} from "@mui/material"

const SearchBar = ({data, placeholder}) => {
  return (
    <div className='search'>
        <div className='searchInput'>
            <Autocomplete
                id = "custom-input-demo"
                options = {data}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                        <input type="text" {...params.inputProps} placeholder={placeholder} autoFocus={true}/>
                )}
            >

            </Autocomplete>
        </div>
    </div>
  )
}

export default SearchBar