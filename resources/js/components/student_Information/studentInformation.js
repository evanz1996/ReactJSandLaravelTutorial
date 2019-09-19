import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import addStudent from "./addStudent";
import studentLists from "./studentLists";
import EditStudent from "./editStudent";

export default class studentInformation extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <Link
                                    className="nav-link "
                                    to="/studentInformation/studentlists"
                                >
                                    Lists of Students
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/studentInformation/addStudent"
                                >
                                    Add Student
                                </Link>
                            </li>
                        </ul>

                        <Route
                            exact
                            path="/studentInformation/studentlists"
                            component={studentLists}
                        ></Route>

                        <Route
                            exact
                            path="/studentInformation/addStudent"
                            component={addStudent}
                        ></Route>

                        <Route
                            exact
                            path="/studentInformation/edit/:id/"
                            component={EditStudent}
                        ></Route>
                    </div>
                </Router>
            </div>
        );
    }
}
