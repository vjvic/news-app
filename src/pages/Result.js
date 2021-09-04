import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { searchNews } from "Redux/actions/newsActions";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid } from "@material-ui/core";

const Result = () => {
  const { value } = useParams();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.allNews);
  const { loading } = useSelector((state) => state.allNews);

  useEffect(() => {
    dispatch(searchNews(value));
  }, [dispatch, value]);

  return (
    <Grid container spacing={3}>
      {news.articles &&
        news.articles.map((item) => (
          <NewsItem key={item._id} item={item} loading={loading} />
        ))}
    </Grid>
  );
};

export default Result;
