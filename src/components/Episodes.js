import React, { Component } from "react";
import Episode from "./Episode";
import SingleEpisode from "./SingleEpisode";
class Episodes extends Component {
  state = {
    episodes: this.props.episodes,
  };
  render() {
    return (
      <div className="container">
        {this.state.episodes.map((epi) => (
          <Episode epi={epi} key={epi.id} {...this.props} />
        ))}
      </div>
    );
  }
}

export default Episodes;
