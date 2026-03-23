import "./PageHeader.css"

const PageHeader = (props) => {
    return (
        <div className="page-header">
            {props.children}
        </div>
    )
}

export default PageHeader