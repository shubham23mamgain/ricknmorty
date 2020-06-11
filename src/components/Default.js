import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Default extends Component {
  render() {
    return (
      <div>
        <Header title="404 NOT FOUND" styleClass="default-hero">
          <h2 className="text-light text-uppercase">
            {" "}
            you are in the Wrong Place
          </h2>
          <Link
            to="/"
            className="btn btn-secondary btn-lg text-uppercase text-center"
          >
            Return Home
          </Link>
        </Header>
      </div>
    );
  }
}

export default Default;
