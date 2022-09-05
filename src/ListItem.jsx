import React from "react";
import parse from "html-react-parser";

class ListItem extends React.Component {
  render() {
    const { data, type } = this.props;
    const elem = `<` + type + ">" + data + "<" + "/" + type + ">";

    return <>{parse(elem)}</>;
  }
}

export default ListItem;
