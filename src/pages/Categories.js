import React, { useEffect } from "react";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "Redux/actions/newsActions";

const Categories = () => {
  const { value } = useParams();

  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.allNews);
  const { loading } = useSelector((state) => state.allNews);

  useEffect(() => {
    dispatch(fetchCategories(value));

    // eslint-disable-next-line
  }, [value]);

  console.log(news);

  return (
    <Grid container spacing={3}>
      {news.articles &&
        news.articles.map((item) => (
          <NewsItem key={item._id} item={item} loading={loading} />
        ))}
    </Grid>
  );
};

export default Categories;
