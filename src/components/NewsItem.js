import React from 'react'

const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
      <div>
        <div className="card" style={{ width: "18rem", marginTop: "20px"}}>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: 1 }}>{source}</span>
          <img src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2023/10/26/1600x900/boat_bluetooth_soundbar_1698312813141_1698312841102.jpg"} className="card-img-top" alt="..." style={{maxHeight:"180px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}....</p>
            <p class="card-text"><small class="text-body-secondary">Published on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
