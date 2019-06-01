import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
  render() {
    const { title, desc } = this.props;

    return title ? (
      <div data-test="listItemComponent">
        <h2 data-test="componentTitle">{title}</h2>
        <div data-test="componentDesc">{desc}</div>
      </div>
    ) : null;
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default ListItem;
