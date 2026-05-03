import "./FilterOption.css"

const FilterOption = (props) => {
    return (
        <div className="filter-option">
            <input type="checkbox" id={props.children} />
            <label htmlFor={props.children} style={{marginLeft: 10}}>{props.children}</label>
        </div>
    )
}

export default FilterOption