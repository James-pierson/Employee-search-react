import React, { Component } from "react";
import Container from "../Container"
import API from "../utils/API";

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
            
            </Container>
        </div>
    };
}

export default SearchResultContainer;