import { getByTitle } from "@testing-library/dom";
import React from "react";

import CollectionItem from "../collection-item/colleciton-item.component";

import "./collection-preview.styles.scss";

const collectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps}></CollectionItem>
        ))}
    </div>
  </div>
);

export default collectionPreview;
