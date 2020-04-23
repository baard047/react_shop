import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/selectors/shop_selectors";

import './collections_overview.scss'
import CollectionPreview from "../collection_preview/collection_preview";


const CollectionsOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...other}) => (
                <CollectionPreview key={ id }{ ...other }/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
