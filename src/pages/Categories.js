import React, { useState, useEffect } from "react";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "Redux/actions/newsActions";
import Header from "components/Header/Header";
import Paginate from "components/Pagination/Paginate";
import useStyles from "./styles";
import Error from "components/Error/Error";

const Categories = () => {
  const { value } = useParams();

  const classes = useStyles();

  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.allNews);
  const { country } = useSelector((state) => state.countries);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCategories(value, country, page));
  }, [dispatch, value, country, page]);

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

  if (error) return <Error text={"Could not fetch the data"} />;

  return (
    <>
      {/* header */}
      <Header text={value} />

      {/* news grid */}
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

export default Categories;
