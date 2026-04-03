import "./LinkButton.css"
import {Link} from "react-router"

const LinkButton = (props) => {
    return (
        <div>
            <Link to={props.ref == null ? "#" : props.ref}>
                <img src={props.icon} title={props.title} />
            </Link>
        </div>
    )
}

export default LinkButton