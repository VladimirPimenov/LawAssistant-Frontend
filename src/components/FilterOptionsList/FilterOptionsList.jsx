import React from "react";
import "./FilterOptionsList.css"

const FilterOptionsList = (props) => {
    return (
        <div className="filter-options-container">
            Сортировать по
            <div className="filter-options">
                {props.children}
            </div>
        </div>
    )
}

export default FilterOptionsList