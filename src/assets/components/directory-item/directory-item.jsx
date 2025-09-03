import "./directory-item.scss"

const DirectoryItem = ({title, imageUrl}) => {
    return (
        <div className="directory-item-container">
            {/* <img src />*/}
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;