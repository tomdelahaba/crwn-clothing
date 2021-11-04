import React from "react";

import SHOP_DATA from "./shop.data.js";
import Collection from "../../components/collection/collection.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection.map(({ id, ...otherCollectionParams }) => (
          <Collection key={id} {...otherCollectionParams}></Collection>
        ))}
      </div>
    );
  }
}

export default ShopPage;
