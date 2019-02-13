import React, { Component } from "react";
import TableHeader from "./TableHeader";
import { getFirstShiftDate } from './../utils/helper';

export class TableHeaders extends Component {
  render() {
    const headers = [
      <TableHeader key="id" id="" />,
      <TableHeader key="employee" id="" />
    ];
    const firstDay = getFirstShiftDate();

    for (let i = 0; i < 7; i++) {
      headers.push(<TableHeader key={i} id={firstDay} offset={i} />);
    }

    return (
      headers
    );
  }
}

export default TableHeaders;