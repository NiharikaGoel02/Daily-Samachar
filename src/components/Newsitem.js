import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let{title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right:'0'}}>
        <span className="badge bg-danger">
    {source}
    
    <span className="visually-hidden">unread messages</span>
  </span>
  </div>
            <img src={!imageUrl?"https://c.ndtvimg.com/2022-10/naoo5i6_earth-generic_625x300_08_October_22.jpg":imageUrl}
             className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
