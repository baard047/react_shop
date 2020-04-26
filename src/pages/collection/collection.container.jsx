import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { isCollectionsLoaded } from "../../redux/selectors/shop_selectors";
import WithSpinner from "../../components/spinner/spinner.component";
import CollectionPage from "./collection";


const mapStateToProps = createStructuredSelector({
   isLoading: state => !isCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;