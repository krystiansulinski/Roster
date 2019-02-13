
import React, { Component } from "react";
import Moment from "react-moment";

export class TableHeader extends Component {
  render() {
    return (
      typeof this.props.id === "string" ?
        <th>{this.props.id}</th>
        :
        <th>
          <Moment add={{ days: this.props.offset }} format="dddd DD/MM">
            {this.props.id}
          </Moment>
        </th>
    );
  }
}

export default TableHeader;