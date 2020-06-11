import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
class Search extends Component {
  state = {
    episodes: this.props.episodes,
  };
  render() {
    return (
      <div className="container">
        <SearchBar
          episodes={this.props.episodes}
          search={this.props.search}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
        <SearchResult
          episodes={this.state.episodes}
          search={this.props.search}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

export default Search;
