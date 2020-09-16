import React, { useState } from 'react';
import Search from './Search';
import ResultsListing from './ResultsListing';
import '../styles/index.css';

const App = () => {
  const [searchData, setSearchData] = useState([]);
  const [noUsersFound, setNoUsersFound] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [keyCursor, setKeyCursor] = useState(0);
  const [disableMouse, setDisableMouse] = useState(false);

  const refs = searchData.reduce((acc, value, index) => {
    acc[index] = React.createRef();
    return acc;
  }, {});

  const fetchResults = async (searchText) => {
    if (searchText) {
      const results = await fetch(
        'http://www.mocky.io/v2/5ba8efb23100007200c2750c'
      ).then((res) => res.json());
      const filterResults = results.filter((val) =>
        filterCallback(val, searchText)
      );
      setNoUsersFound(false);
      setSearchData(filterResults);
      if (!filterResults.length) {
        setNoUsersFound(true);
      }
    } else {
      setSearchData([]);
      setNoUsersFound(false);
      setKeyCursor(0);
      setDisableMouse(false);
    }
  };

  const filterCallback = (value, text) => {
    if (text.length > 0) {
      if (JSON.stringify(value).toLowerCase().includes(text.toLowerCase())) {
        return value;
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && keyCursor > 0) {
      setDisableMouse(true);
      if (refs[keyCursor - 1]) {
          refs[keyCursor - 1].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
      };
      setKeyCursor(keyCursor - 1);
    } else if (e.keyCode === 40 && keyCursor < searchData.length - 1) {
      setDisableMouse(true);
      if (refs[keyCursor + 1]) {
          refs[keyCursor + 1].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
      };
      setKeyCursor(keyCursor + 1);
    }
  };

  const handleMouseOver = (index) => {
    setDisableMouse(false);
    setKeyCursor(index);
  };

  return (
    <div className='container'>
      <Search
        fetchResults={fetchResults}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        handleKeyDown={handleKeyDown}
      />
      <ResultsListing
        searchData={searchData}
        noUsersFound={noUsersFound}
        searchValue={searchValue}
        keyCursor={keyCursor}
        handleMouseOver={handleMouseOver}
        ref={refs}
        disableMouse={disableMouse}
        setDisableMouse={setDisableMouse}
      />
    </div>
  );
};

export default App;
