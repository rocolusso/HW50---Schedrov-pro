import React from "react";
import ListItem from "./ListItem";

class ListGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listItemsData: props.children };
  }

  render() {
    const { listItemsData } = this.state;
    return (
      <ul className="list-group">
        {listItemsData.length &&
          listItemsData.map((listItem) => {
            return (
              <li className="list-group-item">
                <ListItem data={listItem.props.children} type={listItem.type} />
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ListGroup;
