import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";
import AddCategory from "./addCategory";
import EditCategory from "./editCategory";
import Pagination from "react-js-pagination";
import SuccessAlert from "./SuccessAlert";

export default class category extends Component {
    constructor() {
        super();
        this.state = {
            categoryType: [],
            activePage: 1,
            itemsCountPerPage: 5,
            totalItemsCount: 1,
            pageRangeDisplayed: 5,
            alert_message: ""
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/category`).then(response => {
            console.log(response);
            // this.setState({ categoryType: response.data.category.data }); //data to display from the database
            this.setState({
                categoryType: response.data.category.data,
                itemsCountPerPage: response.data.category.per_page,
                totalItemsCount: response.data.category.total,
                activePage: response.data.category.current_page
            });
        });
        // console.log(response);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
        axios
            .get(`http://127.0.0.1:8000/api/category?page=` + pageNumber)

            .then(response => {
                console.log(response);
                this.setState({
                    categoryType: response.data.category.data,
                    itemsCountPerPage: response.data.category.per_page,
                    totalItemsCount: response.data.category.total,
                    activePage: response.data.category.current_page
                });
            });
    }

    onDelete(categoryid) {
        console.log(categoryid);
        axios
            .delete(`http://127.0.0.1:8000/api/category/delete/` + categoryid)
            .then(response => {
                var CategoryType = this.state.categoryType;

                for (var i = 0; i < CategoryType.length; i++) {
                    if (CategoryType[i].id == categoryid) {
                        CategoryType.splice(i, 1);
                        this.setState({ categoryType: CategoryType });
                    }
                }

                this.setState({ alert_message: "success" });
            })
            .catch(error => {
                this.setState({ alert_message: "error" });
            });
    }

    render() {
        // console.log(this.state.categoryType);
        return (
            <div>
                <hr />
                {this.state.alert_message == "success" ? (
                    <SuccessAlert message={"Successfully Deleted!"} />
                ) : null}
                {this.state.alert_message == "error" ? (
                    <ErrorAlert message={" Error occured!"} />
                ) : null}

                <AddCategory />
                <div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category type</th>
                                <th scope="col">Status</th>
                                <th scope="col">Date Created</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categoryType.map(category => {
                                return (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.category_type}</td>
                                        <td>{category.active}</td>
                                        <td>{category.created_at}</td>
                                        <td>
                                            <Link
                                                to={`/category/edit/${category.id}`}
                                            >
                                                Edit
                                            </Link>
                                            |
                                            <a
                                                href="#"
                                                onClick={this.onDelete.bind(
                                                    this,
                                                    category.id
                                                )}
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={this.state.pageRangeDisplayed}
                            onChange={this.handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
