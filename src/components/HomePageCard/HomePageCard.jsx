import "./HomePageCard.css"

const HomePageCard = (props) => {
    return (
        <div className="homepage-card">
            <div className="card-title">
                {props.title}
                <div className="card-image"><img src={props.image}/></div>
            </div>
            <div className="card-text">{props.children}</div>
        </div>
    )
}

export default HomePageCard