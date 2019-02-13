import React, { Component } from "react";
import { getEmployeeById, getFirstShiftDay, getDays } from "../utils/helper";
import Config from "./../mockdata/config";
import Moment from "react-moment";
import "moment-timezone";

class Shifts extends Component {
  render() {
    const start = getFirstShiftDay();
    const employee = getEmployeeById(this.props.id);
    const days = getDays(employee);

    const shifts = [];
    let i = 0;
    for (let day = start; day < start + 7; day++) {
      const e = employee[i];
      if (days[i] === day) {
        shifts.push(
          <td key={e.start_time + Math.random()}>
            {<Moment tz={Config.timezone} format="HH">{e.start_time}</Moment>}
            -
            {<Moment tz={Config.timezone} format="HH:mm">{e.end_time}</Moment>}
          </td>
        );
        i++;
      } else {
        shifts.push(<td key={day + Math.random()}></td>);
      }
    }

    return (
      shifts
    );
  }
}

export default Shifts;