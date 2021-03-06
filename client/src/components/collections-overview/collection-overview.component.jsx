import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import { OverviewCollection } from "./collection-overview.styles";

const CollectionOverview = ({ collections }) => (
  <OverviewCollection>
    {collections.map(({ id, ...otherCollectionParams }) => (
      <CollectionPreview
        key={id}
        {...otherCollectionParams}
      ></CollectionPreview>
    ))}
  </OverviewCollection>
);

const mapStateToProps = (state) =>
  createStructuredSelector({
    collections: selectCollectionsForPreview,
  });

export default connect(mapStateToProps)(CollectionOverview);
