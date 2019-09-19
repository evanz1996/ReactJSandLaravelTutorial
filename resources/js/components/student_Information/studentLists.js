import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import EditStudent from "./editStudent";
import Pagination from "react-js-pagination";

export default class studentLists extends Component {
    constructor() {
        super();

        this.state = { studentInformation: [] };
    }
    componentDidMount() {
        axios
            .get(`http://127.0.0.1:8000/api/studentInformation`)
            .then(response => {
                // console.log(response);
                this.setState({
                    studentInformation: response.data.studentInfo
                });
            });
    }

    onDelete(studentInfo_id) {
        console.log(studentInfo_id);
        axios
            .delete(
                `http://127.0.0.1:8000/api/student_information/delete/` +
                    studentInfo_id
            )
            .then(response => {
                var StudentInformation = this.state.studentInformation;
                for (var i = 0; i < StudentInformation.length; i++) {
                    if (StudentInformation[i].id == studentInfo_id) {
                        StudentInformation.splice(i, 1);
                        this.setState({
                            studentInformation: StudentInformation
                        });
                    }
                }
            });
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Student ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Middle Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Birth Date </th>
                                <th scope="col">created_at </th>
                                <th scope="col">updated_at </th>
                                <th scope="col"> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.studentInformation.map(
                                newStudentInfo => {
                                    return (
                                        <tr key={newStudentInfo.id}>
                                            <th scope="row">1</th>
                                            <td>{newStudentInfo.Student_ID}</td>
                                            <td>{newStudentInfo.FirstName}</td>
                                            <td>{newStudentInfo.MiddleName}</td>
                                            <td>{newStudentInfo.LastName}</td>
                                            <td>{newStudentInfo.Birthmonth}</td>
                                            <td>{newStudentInfo.created_at}</td>
                                            <td>{newStudentInfo.updated_at}</td>
                                            <td>
                                                <Link
                                                    className="nav-link"
                                                    to={`/studentInformation/edit/${newStudentInfo.id}`}
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={this.onDelete.bind(
                                                        this,
                                                        newStudentInfo.id
                                                    )}
                                                    type="button"
                                                    className="btn  btn-danger"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
