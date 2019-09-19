import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class AddStudent extends Component {
    constructor() {
        super();

        this.state = {
            studentInformation: {
                Student_ID: "",
                FirstName: "",
                MiddleName: "",
                LastName: "",
                Birthmonth: ""
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const { name, value } = e.target;
        let newStudentInfo = {
            ...this.state.studentInformation,
            [name]: value
        };
        this.setState({ studentInformation: newStudentInfo });
        console.log(name);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.studentInformation, this.props);
        // console.log(this.state);
        // const newStudentInfo = this.setState.studentInformation;
        axios
            .post("http://127.0.0.1:8000/api/student_information", {
                newStudentInfo: this.state.studentInformation
            })
            .then(response => console.log(response));
    }

    render() {
        // console.log(, this.props);
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label>Student ID</label>
                            <input
                                type="text"
                                className="form-control is-valid:: is-invalid"
                                id="Student_ID"
                                placeholder="Student ID"
                                name="Student_ID"
                                onChange={this.onChange}
                                onSubmit={this.onSubmit}
                            ></input>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control is-valid"
                                id="FirstName"
                                placeholder="First name"
                                name="FirstName"
                                onChange={this.onChange}
                                onSubmit={this.onSubmit}
                                required
                            ></input>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Middle name</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="MiddleName"
                                    ></span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control is-invalid"
                                    id="MiddleName"
                                    placeholder="Middle name"
                                    name="MiddleName"
                                    onChange={this.onChange}
                                    onSubmit={this.onSubmit}
                                    aria-describedby="inputGroupPrepend3"
                                    required
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control is-invalid"
                                id="LastName"
                                name="LastName"
                                placeholder="Last name"
                                onChange={this.onChange}
                                onSubmit={this.onSubmit}
                                required
                            ></input>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Birth month</label>
                            <input
                                type="date"
                                className="form-control is-invalid"
                                id="Birthmonth"
                                placeholder="Birthmonth"
                                name="Birthmonth"
                                onChange={this.onChange}
                                onSubmit={this.onSubmit}
                                required
                            ></input>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Submit form
                    </button>
                </form>
            </div>
        );
    }
}
