import React from "react";

function ResultList(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <table>
                        <tr className="employee-image">{result.results.thumbnail}</tr>
                        <tr className="firstname">{result.results}</tr>
                        <tr className="lastname">{result}</tr>
                        <tr className="email">{result}</tr>
                        <tr className="phone">{result}</tr>
                        <tr className="age">{result}</tr>
                    </table>
                </li>
            ))}
        </ul>
    )
}

export default ResultList;