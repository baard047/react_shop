import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections_overview/collections_overview";
import CollectionPage from "../collection/collection";
import WithSpinner from "../../components/spinner/spinner.component";

import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase_utils";
import { updateCollections } from "../../redux/actions/shop_actions";

const CollectionOverviewHOC = WithSpinner(CollectionsOverview);
const CollectionPageHOC = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
      loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        this.unsubscribeFromSnapshot = firestore.collection('collections')
            .onSnapshot( async snapShot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
                updateCollections(collectionsMap);
                this.setState({loading: false});
            });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
                <Route exact
                       path={ `${ match.path }` }
                       render={(props) => <CollectionOverviewHOC isLoading={loading} {...props}/>}/>
                <Route
                    path={ `${ match.path }/:collectionId` }
                    render={(props) => <CollectionPageHOC isLoading={loading} {...props}/>}/>
            </div>
        );
    }
}

const mapDispatchToProps = {
  updateCollections
};

export default connect(null, mapDispatchToProps)(ShopPage);