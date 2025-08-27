import "./directory.scss"
import CategoryItem from "../category-item/category-item"

const Directory = ({categories}) => {
    return(
        <div className="categories-containers">
            {categories.map(({title, id, imageUrl})=>{
            return (
                <CategoryItem key={id} title={title} id={id} imageUrl={imageUrl}/>
            )
            })}
        </div>
    )
}

export default Directory;