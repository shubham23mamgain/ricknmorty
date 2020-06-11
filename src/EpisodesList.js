import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import Pagination from "./components/Pagination";
import { paginate } from "./components/utils/paginate";
class EpisodesList extends Component {
  state = {
    episodes: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://https://rickandmortyapi.com/api/episode"
    );
    console.log(response);
    this.setState({ episodes: response.results });
  }
  render() {
    const { episodes: allEpisodes, pageSize, currentPage } = this.state;
    const episodes = paginate(allEpisodes, currentPage, pageSize);
    console.log(this.state.episodes);
    return (
      <React.Fragment>
        <div>
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <th>ID</th>
                <th>Episode Code</th>
                <th>Episode Name</th>
                <th>Air Date</th>
              </tr>
            </thead>
            <tbody>
              {this.props.episodes &&
                this.props.episodes.map((epi) => (
                  <tr key={epi.id}>
                    <td>{epi.id}</td>
                    <td>{epi.episode}</td>
                    <td>{epi.name}</td>
                    <td>{epi.air_date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={episodes.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default EpisodesList;
