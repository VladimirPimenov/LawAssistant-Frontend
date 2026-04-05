import "./LinkButton.css"
import {Link} from "react-router"

const LinkButton = (props) => {
    const handleClick = () => {
        if(props.onClick){
            props.onClick(props.docId)
        }
    }
    return (
        <div>
            <Link to={props.ref == null ? "#" : props.ref}>
                <img src={props.icon} title={props.title} onClick={handleClick}/>
            </Link>
        </div>
    )
}

export default LinkButton