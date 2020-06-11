import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Episodes from "./Episodes";

const App2 = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage, setEpisodesPerPage] = useState(5);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      setEpisodes(response.data.results);

      setLoading(false);
    };

    fetchEpisodes();
  }, []);

  // Get Current Episodes

  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;

  const currentEpisodes = episodes.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );

  console.log(episodes.length);

  return (
    <div className="container">
      <h1> My App </h1>
      <Episodes episodes={episodes} loading={loading} />
      <Pagination
        episodesPerPage={episodesPerPage}
        totalPages={episodes.length}
      />
    </div>
  );
};

export default App2;
