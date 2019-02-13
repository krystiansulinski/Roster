import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TableHeader from "./components/TableHeader";
import Table from "./components/Table";
import Shifts from "./components/Shifts";
import Employees from "./components/Employees";
import { getFirstShiftDay, getFirstShiftDate, getDays, getEmployeeById } from "./utils/helper";

it("renders App without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders TableHeader without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TableHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Table without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Table />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Shifts without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Shifts />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Employees without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Employees />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("helper get first shift day", () => {
  expect(getFirstShiftDay()).toBe(18);
});

it("helper get first shift date", () => {
  expect(getFirstShiftDate() + "").toBe(
    "Mon Jun 18 2018 15:00:00 GMT+1000 (Australian Eastern Standard Time)"
  );
});

it("helper get days", () => {
  expect(getDays(getEmployeeById(2635)).length).toBe(4);
});