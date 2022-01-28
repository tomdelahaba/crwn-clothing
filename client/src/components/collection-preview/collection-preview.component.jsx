import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionContainer,
  NameContainer,
  ItemsContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <CollectionContainer>
      <NameContainer>{title}</NameContainer>
      <ItemsContainer>
        {items
          .filter((item, ind) => ind < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

export default CollectionPreview;
