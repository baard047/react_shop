import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from 'redux'
import { selectIsCollectionsFetching } from "../../redux/selectors/shop_selectors";

import WithSpinner from "../spinner/spinner.component";
import CollectionsOverview from "./collections_overview";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;