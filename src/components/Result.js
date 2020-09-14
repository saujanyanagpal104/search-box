import React from 'react';

const Result = ({result, searchValue}) => (
    <div className='result-row'>
        <span className='result-id'>{result.id}</span>
        <span className='result-name'>{result.name}</span>
        <span className='result-address'>{result.address}</span>
    </div>
)

export default Result;