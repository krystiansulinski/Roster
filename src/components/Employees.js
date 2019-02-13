import React, { Component } from "react";
import Shifts from "./Shifts";
import employees from "../mockdata/employees";

class Employees extends Component {
  render() {
    let nr = 1;

    return (
      employees.map(e => (
        <tr key={nr}>
          <td>{nr++}</td>
          <td>{e.last_name} {e.first_name}</td>
          <Shifts id={e.id} />
        </tr>
      ))
    )
  }
}

export default Employees;