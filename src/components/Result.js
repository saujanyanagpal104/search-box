import React from 'react';

const Result = React.forwardRef(
  (
    { result, disableMouse, keyCursor, index, searchValue, handleMouseOver },
    ref
  ) => {
    const highlightText = (text, highlight) => {
      const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      return parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className='highlight'>
            {part}
          </span>
        ) : (
          part
        )
      );
    };

    return (
      <li
        className={`result-row ${keyCursor === index ? 'active-cursor' : ''} ${
          disableMouse ? 'disable-mouse' : 'enable-mouse'
        }`}
        onMouseOver={() => handleMouseOver(index)}
        ref={ref[index]}
      >
        <span className='result-id'>
          {highlightText(result.id, searchValue)}
        </span>
        <span className='result-name'>
          {highlightText(result.name, searchValue)}
        </span>
        <span className='result-address'>
          {highlightText(result.address, searchValue)}
        </span>
      </li>
    );
  }
);

export default Result;
