import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleEpisode from "./SingleEpisode";

class MultipledEpisodes extends Component {
  render() {
    if (this.props.loading) {
      return <div> Loading ...</div>;
    }
    return (
      <div className="container">
        {this.props.episodes.map((epi) => (
          <SingleEpisode key={epi.id} id={epi.id} />
        ))}
      </div>
    );
  }
}

export default MultipledEpisodes;
