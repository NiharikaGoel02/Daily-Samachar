import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3 mb-4 h-100">
        <div className="card h-100 d-flex flex-column position-relative">
          <span
            className="badge bg-danger position-absolute"
            style={{ top: "8px", right: "8px", zIndex: 1 }}
          >
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://c.ndtvimg.com/2022-10/naoo5i6_earth-generic_625x300_08_October_22.jpg"
            }
            className="card-img-top"
            alt="news"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>

            <p className="card-text" style={{ flexGrow: 1 }}>
              {description ? description.slice(0, 120) + "..." : ""}
            </p>

            <p className="card-text">
              <small className="text-muted">
                By {author || "Unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark mt-auto mb-3"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
