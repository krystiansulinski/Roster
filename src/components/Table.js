import React, { Component } from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import TableHeaders from "./TableHeaders";
import Employees from "./Employees";
import Config from "./../mockdata/config";

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <h1>{Config.location}</h1>
        <BootstrapTable striped bordered hover variant="dark">
          <thead>
            <tr>
              <TableHeaders />
            </tr>
          </thead>
          <tbody>
            <Employees />
          </tbody>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;