import "./LinkButton.css"

import {Link} from "react-router"

const LinkButton = (props) => {
    const handleClick = () => {
        if(props.onClick){
            props.onClick(props.id)
        }
    }
    return (
        <div>
            <Link to={props.ref == null ? "#" : props.ref}>
                {props.icon 
                ? <img src={props.icon} title={props.title} onClick={handleClick}/>
                : <div className="button-with-text">{props.title}</div>
                }
            </Link>
        </div>
    )
}

export default LinkButton