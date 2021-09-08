import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { searchNews } from "Redux/actions/newsActions";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid } from "@material-ui/core";
import Header from "components/Header/Header";
import Paginate from "components/Pagination/Paginate";

const Result = () => {
  const { value } = useParams();
  const dispatch = useDispatch();
  const { news, loading } = useSelector((state) => state.allNews);
  const { country } = useSelector((state) => state.countries);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(searchNews(value, country, page));
  }, [dispatch, value, country, page]);

  //change page
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {/* header */}
      <Header text={`search results for: "${value}"`} />

      {/* news grid */}
      <Grid container spacing={3}>
        {loading
          ? "loading..."
          : news.articles.map((item) => (
              <NewsItem key={item._id} item={item} loading={loading} />
            ))}
      </Grid>

      {/*  paginate */}
      <Paginate page={page} handleChange={handleChange} news={news} />
    </>
  );
};

export default Result;
