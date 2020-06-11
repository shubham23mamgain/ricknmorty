import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Episode from "./components/Episode";

class AllEpisodes extends Component {
  showSearch() {
    let filtered = this.props.episodes.filter((epi) => {
      return (
        epi.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
      );
    });
    return (
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
    );
  }

  render() {
    if (this.props.loading) {
      return <div> Loading ...</div>;
    }
    return (
      <div className="container">
        <SearchBar
          episodes={this.props.episodes}
          search={this.props.search}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
        {this.showSearch()}
      </div>
    );
  }
}

export default AllEpisodes;
