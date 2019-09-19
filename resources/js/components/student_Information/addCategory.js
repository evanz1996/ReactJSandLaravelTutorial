import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

export default class AddCategory extends Component {
    constructor() {
        super();
        this.onChangeCategoryType = this.onChangeCategoryType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { Category_type: "", alert_message: "" };
    }

    onChangeCategoryType(e) {
        this.setState({
            Category_type: e.target.value
        });
        console.log(e.target.value);
    }

    onSubmit(e) {
        e.preventDefault();

        const category = this.state.Category_type;

        axios
            .post("http://127.0.0.1:8000/api/category", {
                category
            })
            // .then(response => console.log(response));
            .then(response => {
                this.setState({ alert_message: "success" });
            })
            .catch(error => {
                this.setState({ alert_message: "error" });
            });
    }

    render() {
        return (
            <div>
                <hr />
                {this.state.alert_message == "success" ? (
                    <SuccessAlert message={"Successfully Added!"} />
                ) : null}
                {this.state.alert_message == "error" ? (
                    <ErrorAlert message={"Error Occured"} />
                ) : null}

                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label>Category</label>
                            <input
                                type="text"
                                className="form-control is-valid"
                                id="category_type"
                                name="category_type"
                                value={this.state.Category_type}
                                onChange={this.onChangeCategoryType}
                                placeholder="Enter Category"
                                required
                            ></input>
                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
