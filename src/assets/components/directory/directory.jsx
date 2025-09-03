import "./directory.scss"
import DirectoryItem from "../directory-item/directory-item.jsx"

const Directory = ({categories}) => {
    return(
        <div className="categories-containers">
            {categories.map(({title, id, imageUrl})=>{
            return (
                <DirectoryItem key={id} title={title} id={id} imageUrl={imageUrl}/>
            )
            })}
        </div>
    )
}

export default Directory;