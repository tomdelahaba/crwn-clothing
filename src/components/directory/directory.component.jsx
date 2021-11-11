import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector.js";

import MenuItem from "../../components/menu-item/menu-item.component";

import { DirectoryContainer } from "./directory.styles.jsx";

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}></MenuItem>
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

/* 
** THIS IS HOW I SHOULD DEFINE THE MAPSTATETOPROPS WITHOUT USING SELECTOR / STRUCTUREDSELECTOR
** state.directory should be used in there because of root_reducer store the state in directory.
**
const mapStateToProps = (state) => ({
  sections: state.directory.sections,
});
*/

export default connect(mapStateToProps)(Directory);
