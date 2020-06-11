import React, { Component } from "react";

class MutipleEpisodes extends Component {
  render() {
    return (
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
    );
  }
}

export default MutipleEpisodes;
