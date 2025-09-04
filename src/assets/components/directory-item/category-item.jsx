//import "./category-item.scss"
import {Body, DirectoryItemContainer, BackgroundImage} from "./category-item.styles.jsx";
import {Link} from "react-router";

const DirectoryItem = ({title, imageUrl}) => {
    return (
        <DirectoryItemContainer>
            {/* <img src />*/}
            <BackgroundImage  image={imageUrl}></BackgroundImage>
                <Body>
                    <Link to={`shop/${title.toLowerCase()}`}>
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                    </Link>
                </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;