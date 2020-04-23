import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDirectirySections } from "../../redux/selectors/directory_selectors";

import './directory.scss'
import MenuItem from "../menu_item/menu_item";


const Directory = ({sections}) => (
    <div className="directory-menu">
        { sections.map(({id, ...other}) => (
            <MenuItem key={ id } { ...other }/>
        )) }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectirySections
});

export default connect(mapStateToProps)(Directory);