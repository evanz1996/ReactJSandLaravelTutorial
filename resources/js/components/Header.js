import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import About from "./About";
import Error404 from "./Error404";
import Home from "./Home";
import Index from "./Index";
import studentInformation from "./student_Information/studentInformation";
import category from "./student_Information/category";
import EditCategory from "./student_Information/editCategory";
import EditStudent from "./student_Information/editStudent";

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/studentInfo">
                                    Student Information
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">
                                    Category
                                </Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/studentInfo"
                            component={studentInformation}
                        />
                        <Route
                            exact
                            path="/studentInformation/addStudent"
                            component={studentInformation}
                        ></Route>

                        <Route
                            exact
                            path="/studentInformation/edit/:id/"
                            component={studentInformation}
                        ></Route>

                        <Route
                            exact
                            path="/category"
                            component={category}
                        ></Route>
                        <Route
                            exact
                            path="/category/edit/:id/"
                            component={EditCategory}
                        ></Route>
                        <Route exact path="/*" component={Error404}></Route>
                        <Route
                            exact
                            path="/studentInformation/studentlists"
                            component={studentInformation}
                        ></Route>
                        <Route
                            exact
                            path="/studentInformation/addStudent"
                            component={studentInformation}
                        ></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}
