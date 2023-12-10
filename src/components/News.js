import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updatNews = async () => {
    props.setProgress(10)
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    const url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&category=${props.category}&max=100&apikey=${props.apiKey}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `NewsWallah - ${capitalizeFirstLetter(props.category)}`
    updatNews()
  }, [])

  const handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd3687a5581a417cbb1fa07f536ea23c&page=${this.state.page - 1}&pageSize=${props.pageSize}`
  setLoading(true)
    // let data = await fetch(url)
    // let parsedData = await data.json()
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })

    setPage(page - 1)
    updatNews();
  }

  const handleNextClick = async () => {
    if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {

      //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd3687a5581a417cbb1fa07f536ea23c&page=${this.state.page + 1}&pageSize=${props.pageSize}`
      //   this.setState({ loading: true })
      //   let data = await fetch(url)
      //   let parsedData = await data.json()
      //   this.setState({
      //     page: this.state.page + 1,
      //     articles: parsedData.articles,
      //     loading: false
      //   })
      // }

      setPage(page + 1)
      updatNews();
    }
  }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };

  return (
    <div className='container my-3'>
      <h1 className='text-center' style={{marginTop:"70px"}}>NewsWalah - Top Headlines! - {capitalizeFirstLetter(props.category)}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        conts dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults && articles.length < totalResults}
        loader={<Spinner />}

        style={{ overflow: "hidden" }}
      >
        <div className="row">
          {
            articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                {/* <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} /> */}
                <NewsItem title={element.title} description={element.description} imageUrl={element.image} newsUrl={element.url}  date={element.publishedAt} source={element.source.name} />
              </div>
            })
          }

        </div>
      </InfiniteScroll>
    </div>
  )
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
