import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default class Error404 extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <div className="alert alert-danger">
                    404 Page not found.
                    <Link to="/home" className="alert-link">
                        Back to home
                    </Link>
                </div>
            </div>
        );
    }
}
