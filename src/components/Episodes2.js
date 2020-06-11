import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import EpisodesList from "../EpisodesList";

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
      search: "",
      pageSize: 4,
      currentPage: 1,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const url = "https://https://rickandmortyapi.com/api/episode";

    try {
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({ episodes: responseData.episodes, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  // getData() {
  //   fetch("https://https://rickandmortyapi.com/api/episode")
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson);
  //       // this.setState({ data: responseJson });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    if (this.state.loading) {
    }
    console.log(this.state.episodes);
    return (
      <div>
        <SearchBar
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <EpisodesList
          episodes={this.state.episodes}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default Episodes;
