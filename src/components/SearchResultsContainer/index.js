import React, { Component } from "react";
import Container from "../Container"
import API from "../utils/API";
import SearchForm from "../../../../../LocalRepo/01-Class-Content/10-week/03-day/00-23-Stu_PupsterApp/Solved/src/components/SearchForm";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
    };
    
    handleEmployeeSearch = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        <div>
            <Container>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}

            />        
            </Container>
        </div>
    };
}

export default SearchResultContainer;