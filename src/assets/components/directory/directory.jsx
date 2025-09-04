import "./directory.scss"
import DirectoryItem from "../directory-item/category-item.jsx";

const Directory = ({categories}) => {
    return(
        <div className="categories-containers">
            {categories.map(({title, id, imageUrl, route})=>{
            return (
                <DirectoryItem key={id} title={title} id={id} imageUrl={imageUrl} route={route}/>
            )
            })}
        </div>
    )
}

export default Directory;