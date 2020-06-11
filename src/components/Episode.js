import React, { Component } from "react";
import { Link } from "react-router-dom";

class Episode extends Component {
  render() {
    // const { name, id } = this.props.episodes;

    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.loading ? (
          "Loading"
        ) : (
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card " style={{ height: "200%" }}>
              <div className="card-body text-capitalize">
                <h1>{this.props.epi.name} </h1>
                <h6 className="text-slanted text-warning">
                  {this.props.epi.episode}
                </h6>
              </div>
              <div className="card-footer">
                <Link
                  to={`/episode/${this.props.epi.id}`}
                  className="btn btn-primary text-capitalize"
                >
                  {" "}
                  details
                </Link>
                <a
                  href={this.props.epi.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success mx-2 text-capitalize"
                >
                  {" "}
                  Episode url
                </a>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Episode;
