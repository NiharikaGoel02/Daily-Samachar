import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  apikey = process.env.REACT_APP_GNEWS_API_KEY;

  state = {
    progress: 0,
    searchQuery: "",
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar setSearchQuery={this.setSearchQuery} />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  searchQuery={this.state.searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                  searchQuery={this.state.searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="entertainme"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                  searchQuery={this.state.searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  searchQuery={this.state.searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                  searchQuery={this.state.searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                  searchQuery={this.state.searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                  searchQuery={this.state.searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                  searchQuery={this.state.searchQuery}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
