import { useState } from "react"
import "./FilterOption.css"

const FilterOption = (props) => {
    const [isOptionSelected, setOptionSelected] = useState(false)

    const handleOptionClicked = (e) => {
        const isChecked = e.target.checked
        setOptionSelected(isChecked)
        
        if(isChecked)
            props.onOptionSelected()
    }

    return (
        <div className="filter-option">
            <input 
                type="checkbox" 
                id={props.children} 
                checked={isOptionSelected}
                onChange={handleOptionClicked} 
            />
            <label htmlFor={props.children} style={{marginLeft: 10}}>{props.children}</label>
        </div>
    )
}

export default FilterOption