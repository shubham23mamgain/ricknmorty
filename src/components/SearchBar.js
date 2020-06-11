import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mt-5 text-center col-md-8">
            <h1 className="text-slanted text-capitalize ">
              search episodes with{" "}
              <strong className="text-orange"> Rick and Morty</strong>
            </h1>
            <form className="mt-4">
              <div className="input-group">
                <label htmlFor="search" className="text-capitalize p-2">
                  type episode name
                </label>
                <input
                  type="text"
                  name="search"
                  className="form-control "
                  placeholder="Search your Episode"
                  defaultValue={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    className="input-group-text bg-primary text-white btn btn-secondary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
