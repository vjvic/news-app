import React, { useEffect } from "react";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "Redux/actions/newsActions";
import Header from "components/Header/Header";

const Categories = () => {
  const { value } = useParams();

  const dispatch = useDispatch();
  const { news, loading } = useSelector((state) => state.allNews);
  const { country } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCategories(value, country));

    // eslint-disable-next-line
  }, [value, country]);

  return (
    <>
      <Header text={value} />
      <Grid container spacing={3}>
        {news.articles &&
          news.articles.map((item) => (
            <NewsItem key={item._id} item={item} loading={loading} />
          ))}
      </Grid>
    </>
  );
};

export default Categories;
