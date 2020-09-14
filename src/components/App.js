import React, { useState } from 'react';
import Search from './Search';
import ResultsListing from './ResultsListing';
import '../styles/index.css';

const App = () => {
    const [searchData, setSearchData] = useState([]);
    const [noUsersFound, setNoUsersFound] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const fetchResults = async (searchText) => {
        if(searchText) {
            const results = await fetch('http://www.mocky.io/v2/5ba8efb23100007200c2750c').then(res => res.json());
            const filterResults = results.filter(val => filterCallback(val, searchText));
            setNoUsersFound(false);
            setSearchData(filterResults);
            if(!filterResults.length) {
                setNoUsersFound(true);   
            }
        } else {
            setSearchData([]);
            setNoUsersFound(false);
        }
    }

    const filterCallback = (value, text) => {
        if(text.length > 0) {
            if(JSON.stringify(value).toLowerCase().includes(text.toLowerCase())) {
                return value;
            }
        }
    }

    return (
        <div className='container'>
            <Search fetchResults={fetchResults} setSearchValue={setSearchValue} searchValue={searchValue} />
            <ResultsListing searchData={searchData} noUsersFound={noUsersFound} searchValue={searchValue} />
        </div>
    );
}

export default App;