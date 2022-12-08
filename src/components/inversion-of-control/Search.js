import React from "react";

const Search = (inputPlaceholder, onChange) => {
    return (
        <div className="p-2">
            <input
                onChange={onChange}
                type="text"
                placeholder={inputPlaceholder}
                className="p-4 outline-none w-full border border-gray-200 rounded"
            />
        </div>
    );
};

export default Search;
