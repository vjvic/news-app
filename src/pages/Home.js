import React, { useEffect } from "react";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid } from "@material-ui/core";
import { fetchNews } from "Redux/actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Header/Header";

const Home = () => {
  const { news, loading } = useSelector((state) => state.allNews);
  const { country } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews(country));
  }, [dispatch, country]);

  return (
    <>
      <Header text={"Latest News"} />
      <Grid container spacing={3}>
        {news.articles &&
          news.articles.map((item) => (
            <NewsItem key={item._id} item={item} loading={loading} />
          ))}
      </Grid>
    </>
  );
};

export default Home;
