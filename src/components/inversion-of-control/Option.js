import React from "react";

const Option = (props) => {
    return (
        <div className="options-item p-4 cursor-pointer flex items-center justify-between">
            {props.children}
        </div>
    );
};

export default Option;
