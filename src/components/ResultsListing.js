import React from 'react';
import Result from './Result';

const ResultsListing = ({searchData, noUsersFound, searchValue}) => (
    <>
        {searchValue ? <div className='results-container'>
        {
            !noUsersFound ? searchData.map((result) => <Result key={result.id} result={result} searchValue={searchValue} />) : <div className='user-not-found'>USER NOT FOUND</div>
        }
    </div> : null}
    </>
);

export default ResultsListing;