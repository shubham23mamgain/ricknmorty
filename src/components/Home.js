import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header title="Rick and Morty">
        <Link
          to="/search"
          className="text-uppercase btn btn-secondary btn-lg mt-3"
        >
          Search
        </Link>
      </Header>
    </div>
  );
};

export default Home;
