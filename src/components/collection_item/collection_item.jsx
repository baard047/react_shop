import React from "react";
import {connect} from "react-redux";

import {addItem} from "../../redux/actions/cart_actions";

import { CollectionItemContainer, CollectionFooterContainer,
         AddButton, BackgroundImage, Name, Price} from "./collection_items.styles";


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
};

//TODO maybe overhead
// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item))
// });

const mapDispatchToProps = {
    addItem
};

export default connect(null, mapDispatchToProps)(CollectionItem);