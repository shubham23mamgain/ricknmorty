import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SingleEpisode extends Component {
  state = {
    episode: {},
    loading: true,
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const url = `https://rickandmortyapi.com/api/episode/${id}`;
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({
        episode: responseData,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    const id = this.props.match.params.id;
    if (this.props != prevProps) {
      const url = `https://rickandmortyapi.com/api/episode/${id}`;
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        this.setState({
          episode: responseData,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  showButtons() {
    const id = this.props.match.params.id;
    if (+id <= 1) {
      return (
        <button className="btn m-3">
          <Link to={`${+id + 1}`}> Next </Link>
        </button>
      );
    } else if (+id > 35) {
      return (
        <button className="btn m-3">
          <Link to={`${+id - 1}`}>Previous</Link>
        </button>
      );
    }

    return (
      <div>
        <button className="btn m-3">
          <Link to={`${+id - 1}`}>Previous</Link>
        </button>
        <button className="btn m-3">
          <Link to={`${+id + 1}`}> Next </Link>
        </button>
      </div>
    );
  }

  render() {
    const { name, episode, url, characters, air_date } = this.state.episode;
    const id = this.props.match.params.id;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading Episode....
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/episode"
              className="btn btn-warning mb-5 text-capatilize"
            >
              back to episodes list
            </Link>
            <h3 className="text-uppercase">{name}</h3>
            <h4 className="text-warning text-capitalize text-slanted">
              {episode}
            </h4>
            <h3 className="text-uppercase">{air_date}</h3>
            {this.showButtons()}
          </div>
          {/* info */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize"
            >
              Episode URL
            </a>

            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Characters</h2>
              {characters.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
