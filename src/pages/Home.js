import React, { useEffect } from "react";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid } from "@material-ui/core";
import { fetchNews } from "Redux/actions/newsActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { news } = useSelector((state) => state.allNews);
  const { loading } = useSelector((state) => state.allNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
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
