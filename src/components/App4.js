import React, { Component } from "react";
import axios from "axios";

import Home from "./Home";
import Default from "./Default";
import Navbar from "./Navbar";
import MultipledEpisodes from "./MultipledEpisodes";
import { Route, Switch } from "react-router-dom";
import Search from "./Search";

import Episodes from "./Episodes";
import SingleEpisode from "./SingleEpisode";

class App4 extends Component {
  state = {
    episodes: [],
    search: "",
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const urli = "https://rickandmortyapi.com/api/episode";
    const response = await axios.get(urli);
    console.log(response.data.results);
    this.setState({ episodes: response.data.results, loading: false });
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.episodes;
    console.log(data);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route
            path="/episode"
            exact
            render={() => (
              <MultipledEpisodes
                episodes={this.state.episodes}
                loading={this.state.loading}
              />
            )}
          />

          <Route path="/episode/:id" render={() => <SingleEpisode />} />
          <Route
            path="/episodeses"
            render={() => (
              <Episodes
                episodes={this.state.episodes}
                loading={this.state.loading}
              />
            )}
          />

          <Route
            path="/search"
            exact
            render={() => (
              <Search
                episodes={this.state.episodes}
                search={this.state.search}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                loading={this.state.loading}
              />
            )}
          />
          <Route path="/" exact component={Home} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App4;
