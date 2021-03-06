import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/actions/shop_actions";
import CollectionOverviewContainer from "../../components/collections_overview/collections_overwiew.container";
import CollectionPageContainer from "../collection/collection.container";


class ShopPage extends Component {
    componentDidMount() {
        this.props.fetchCollectionsStart();
    }

    render() {
        const {match} = this.props;

        return (
            <div className="shop-page">
                <Route exact
                       path={ `${ match.path }` }
                       component={ CollectionOverviewContainer }
                />
                <Route path={ `${ match.path }/:collectionId` }
                       component={ CollectionPageContainer }
                />
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchCollectionsStart
};

export default connect(null, mapDispatchToProps)(ShopPage);