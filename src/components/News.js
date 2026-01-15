import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    searchQuery: "",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - DailySamachar`;
  }

  async updateNews() {
    this.props.setProgress(10);

    let url;
    if (this.props.searchQuery) {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
        this.props.searchQuery
      )}&lang=en&page=${this.state.page}&max=${this.props.pageSize}&apikey=${
        this.props.apikey
      }`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&country=${this.props.country}&lang=en&page=${this.state.page}&max=${this.props.pageSize}&apikey=${this.props.apikey}`;
    }

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();

    this.props.setProgress(70);

    const articles = parsedData.articles || [];

    this.setState({
      articles,
      totalResults: parsedData.totalArticles ?? articles.length,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    await this.updateNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ page: 1 }, this.updateNews);
    }
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;

    let url;
    if (this.props.searchQuery) {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
        this.props.searchQuery
      )}&lang=en&page=${nextPage}&max=${this.props.pageSize}&apikey=${
        this.props.apikey
      }`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&country=${this.props.country}&lang=en&page=${nextPage}&max=${this.props.pageSize}&apikey=${this.props.apikey}`;
    }

    let data = await fetch(url);
    let parsedData = await data.json();
    const newArticles = parsedData.articles || [];

    this.setState((prevState) => ({
      page: nextPage,
      articles: prevState.articles.concat(newArticles),
      totalResults: parsedData.totalArticles ?? prevState.totalResults,
    }));
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          DailySamachar - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.articles.length < this.state.totalResults &&
            this.state.totalResults > 0
          }
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 d-flex" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.image}
                      newsUrl={element.url}
                      author={element.source?.name || "Unknown"}
                      date={element.publishedAt}
                      source={element.source?.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
