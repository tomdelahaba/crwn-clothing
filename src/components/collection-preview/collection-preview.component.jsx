import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <div className='collection-wrapper'>
      <h1 className='collection-name'>{title}</h1>
      <div className='items-wrapper'>
        {items
          .filter((item, ind) => ind < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
