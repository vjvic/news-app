import React, { useState, useEffect } from "react";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid, CircularProgress } from "@material-ui/core";
import { fetchNews } from "Redux/actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Header/Header";
import Paginate from "components/Pagination/Paginate";
import useStyles from "./styles";

const Home = () => {
  const { news, loading } = useSelector((state) => state.allNews);
  const { country } = useSelector((state) => state.countries);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchNews(country, page));
  }, [dispatch, country, page]);

  //change page
  const handleChange = (event, value) => {
    setPage(value);
  };

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );

  return (
    <>
      {/* header */}
      <Header text={"Latest News"} />

      {/*  news grid */}
      <Grid container spacing={3}>
        {news.articles &&
          news.articles.map((item) => (
            <NewsItem key={item._id} item={item} loading={loading} />
          ))}
      </Grid>

      {/* pagination */}

      <Paginate page={page} handleChange={handleChange} news={news} />
    </>
  );
};

export default Home;
