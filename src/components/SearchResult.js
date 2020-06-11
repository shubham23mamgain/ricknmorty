import React, { Component } from "react";
import { Link } from "react-router-dom";
class SearchResult extends Component {
  render() {
    let filtered = this.props.episodes.filter((epi) => {
      return (
        epi.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Episode Code</th>
              <th> Episode Name</th>
              <th> Air Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((epi) => (
              <tr key={epi.id}>
                <td>{epi.id}</td>
                <td>{epi.episode}</td>
                <td>
                  <Link to={`episode/${epi.id}`}>{epi.name} </Link>
                </td>
                <td>{epi.air_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResult;
