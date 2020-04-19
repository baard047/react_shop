import React from "react";
import {connect} from "react-redux";

import {addItem} from "../../redux/actions/cart_actions";

import './collection_item.scss'
import Button from "../button/button";


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;

    return (
        <div className={'collection-item'}>
            <div className={'image'}
                 style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className={'collection-footer'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
            <Button inverted
                    onClick={() => addItem(item)}
            >
                Add to cart
            </Button>
        </div>
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