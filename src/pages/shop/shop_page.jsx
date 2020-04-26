import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections_overview/collections_overview";
import CollectionPage from "../collection/collection";
import WithSpinner from "../../components/spinner/spinner.component";

import { fetchCollectionsStartAsync } from "../../redux/actions/shop_actions";
import { selectIsCollectionsFetching, isCollectionsLoaded } from "../../redux/selectors/shop_selectors";

const CollectionOverviewHOC = WithSpinner(CollectionsOverview);
const CollectionPageHOC = WithSpinner(CollectionPage);

class ShopPage extends Component {
    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
    }

    render() {
        const {match, isCollectionFetching, isCollectionsLoaded} = this.props;

        return (
            <div className="shop-page">
                <Route exact
                       path={ `${ match.path }` }
                       render={ (props) =>
                           <CollectionOverviewHOC isLoading={ isCollectionFetching } { ...props }/> }
                />
                <Route
                    path={ `${ match.path }/:collectionId` }
                    render={ (props) =>
                        <CollectionPageHOC isLoading={ !isCollectionsLoaded } { ...props }/> }
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionsFetching,
    isCollectionsLoaded: isCollectionsLoaded
});

const mapDispatchToProps = {
    fetchCollectionsStartAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);