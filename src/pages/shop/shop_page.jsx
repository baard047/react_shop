import React from "react";

import { Route } from 'react-router-dom'

import CollectionsOverview from "../../components/collections_overview/collections_overview";
import CategoryPage from "../category/category";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:category`} component={CategoryPage} />
    </div>
);

export default ShopPage;