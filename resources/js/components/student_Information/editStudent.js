import React, { Component } from "react";
import axios from "axios";
// import successAlert from "SuccessAlert";

export default class EditStudent extends Component {
    constructor(props) {
        super(props);

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

    componentDidMount() {
        axios
            .get(
                `http://127.0.0.1:8000/api/studentInformation/edit/` +
                    this.props.match.params.id
            )
            .then(response => {
                console.log(response);
                this.setState({
                    studentInformation: response.data.studentInfo
                });
            });
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

        axios
            .put(
                "http://127.0.0.1:8000/api/studentInformation/update/" +
                    this.props.match.params.id,
                {
                    newStudentInfo: this.state.studentInformation
                }
            )
            .then(response => console.log(response));
        // console.log(newStudentInfo);
    }

    render() {
        return (
            <div>
                <h1> Update Student Information</h1>
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
                                    value={
                                        this.state.studentInformation
                                            .Student_ID || ""
                                    }
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
                                    value={
                                        this.state.studentInformation
                                            .FirstName || ""
                                    }
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
                                        value={
                                            this.state.studentInformation
                                                .MiddleName || ""
                                        }
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
                                    value={
                                        this.state.studentInformation
                                            .LastName || ""
                                    }
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
                                    value={
                                        this.state.studentInformation
                                            .Birthmonth || ""
                                    }
                                ></input>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Submit form
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
