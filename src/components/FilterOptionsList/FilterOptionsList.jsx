import React from "react";
import "./FilterOptionsList.css"

const FilterOptionsList = (props) => {
    return (
        <div className="filter-options">
            Сортировать по
            <div className="options-list">
                {props.children}
            </div>
        </div>
    )
}

export default FilterOptionsList