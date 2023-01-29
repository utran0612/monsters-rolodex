import React from "react";
import "./search-box.styles.css";
export const SearchBox = ({className,placeholder,onChangeHandlder}) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandlder}
    />
  );
};

export default SearchBox;
