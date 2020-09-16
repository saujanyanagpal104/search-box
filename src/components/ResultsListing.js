import React from 'react';
import Result from './Result';

const ResultsListing = React.forwardRef(
  (
    {
      searchData,
      noUsersFound,
      searchValue,
      keyCursor,
      handleMouseOver,
      disableMouse,
    },
    ref
  ) => {
    return (
      <>
        {searchValue ? (
          !noUsersFound ? (
            searchData.length ? (
              <div className='results-container'>
                <ul>
                  {searchData.map((result, index) => (
                    <Result
                      key={result.id}
                      result={result}
                      keyCursor={keyCursor}
                      index={index}
                      handleMouseOver={handleMouseOver}
                      ref={ref}
                      disableMouse={disableMouse}
                      searchValue={searchValue}
                    />
                  ))}
                </ul>
              </div>
            ) : null
          ) : (
            <div className='user-not-found'>USER NOT FOUND</div>
          )
        ) : null}
      </>
    );
  }
);

export default ResultsListing;
