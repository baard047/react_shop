import React from "react";

import './collection_preview.scss'
import CollectionItem from "../collection_item/collection_item";

const CollectionPreview = ({title, items}) => (
    <div className={'collection-preview '}>
        <h1 className={'title'}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4) //rendering only 4 items to preview
                    .map(({id, ...other}) => (
                        <CollectionItem key={id}{...other}/>
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;