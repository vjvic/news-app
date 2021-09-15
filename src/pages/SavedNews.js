import React from "react";
import { useSelector } from "react-redux";
import NewsItem from "components/News/NewsItem/NewsItem";
import { Grid, CircularProgress, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

const SavedNews = () => {
  const { savedNews, loading } = useSelector((state) => state.firestore);
  const { currentUser } = useSelector((state) => state.auth);

  const classes = useStyles();

  const grid = (
    <Grid container spacing={3}>
      {savedNews &&
        savedNews.map((item) => <NewsItem key={item._id} item={item} />)}
    </Grid>
  );

  const text = (
    <Box align="center" my={5}>
      <Typography>Please login to use this feature</Typography>
    </Box>
  );

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );

  return (
    <>
      {/*  news grid */}
      {currentUser.length <= 0 ? text : grid}
    </>
  );
};

export default SavedNews;
