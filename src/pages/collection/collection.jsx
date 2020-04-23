import React from 'react';
import { connect } from 'react-redux'

import './collection.scss'

import CollectionItem from "../../components/collection_item/collection_item";
import { selectCollection } from "../../redux/selectors/shop_selectors";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

//second parameter is required because of the match prop, passed by ShopPage <Route ... />
const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);