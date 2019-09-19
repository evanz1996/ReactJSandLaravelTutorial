import React, { Component } from "react";
import axios from "axios";

export default class ErrorAlert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="alert alert-danger" role="alert">
                {this.props.message}
            </div>
        );
    }
}
