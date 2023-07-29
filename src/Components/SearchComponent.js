import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch callback with the search query
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        style={{margin: '10px' , padding:"10px"}}
      />
    </div>
  );
};

export default SearchComponent;
