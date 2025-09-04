//import "./category-item.scss"
import {Body, DirectoryItemContainer, BackgroundImage} from "./category-item.styles.jsx";

const DirectoryItem = ({title, imageUrl}) => {
    return (
        <DirectoryItemContainer>
            {/* <img src />*/}
            <BackgroundImage  image={imageUrl}></BackgroundImage>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;