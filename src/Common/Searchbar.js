import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const clearInput = () => {
    setSearchText('');
  };

  return (
    <div className="relative mx-auto text-gray-600">
      <div className="relative">
        <input
          className="w-36 sm:w-48 md:w-60 lg:w-72 border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
        
          name="search"
          placeholder="Search"
          value={searchText}
          onChange={handleInputChange}
        />
        {searchText ? (
          <button type="button" className="absolute right-0 top-0 mt-3 mr-4 mb-3" onClick={clearInput}>
            <ClearIcon className='mb-2' />
          </button>
        ) : (
          <button type="button" className="absolute right-0 top-0 mt-3 mr-4">
            <SearchIcon className='mb-1' />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar