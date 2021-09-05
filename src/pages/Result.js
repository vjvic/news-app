import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { searchNews } from "Redux/actions/newsActions";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid } from "@material-ui/core";
import Header from "components/Header/Header";

const Result = () => {
  const { value } = useParams();
  const dispatch = useDispatch();
  const { news, loading } = useSelector((state) => state.allNews);
  const { country } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(searchNews(value, country));
  }, [dispatch, value, country]);

  return (
    <>
      <Header text={`search results for: "${value}"`} />
      <Grid container spacing={3}>
        {news.articles &&
          news.articles.map((item) => (
            <NewsItem key={item._id} item={item} loading={loading} />
          ))}
      </Grid>
    </>
  );
};

export default Result;
