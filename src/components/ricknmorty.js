import React, { Component } from "react";
import axios from "axios";

class RicknMorty extends Component {
  state = {
    episodes: [],
  };

  async componentDidMount() {
    const response = await axios.get("https://rickandmortyapi.com/api/episode");
    console.log(response.data.results);
    this.setState({ episodes: response.data.results });
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Episode Name</th>
              <th> Episode Code</th>
              <th> Air Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.episodes.map((epi) => (
              <tr key={epi.id}>
                <td>{epi.id}</td>
                <td>{epi.episode}</td>
                <td>{epi.name}</td>
                <td>{epi.air_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RicknMorty;
