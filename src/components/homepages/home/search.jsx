import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearchSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchValue.trim() !== '') {
      const words = searchValue.trim().split(' ');
      const newWordsArray = words.map((word) => ({ name: word }));
      setSearchResults([...searchResults, ...newWordsArray]);
      // setSearchValue('');
    }
  };

  useEffect(() => {
    // This effect will run whenever searchResults changes
    onSearchSubmit(searchResults);
    // console.log(searchResults)
    setSearchResults('');
  }, [searchResults, onSearchSubmit]);

  return (
    <div className="w-full flex justify-center py-6 px-10">
      <div className="flex justify-center items-center w-full">
      <FiSearch className='text-third' size={25}/>
        <input
          className="bg-white w-full  p-1 text-primary  rounded-full  text-sm"
          type="text"
          placeholder="¿Que estas buscando?  "
          value={searchValue}
          onChange={handleInputChange}
        />

      </div>
    </div>
  );
};

export default SearchBar;