import React from "react";
import Box from "@material-ui/core/Box";
import useStyles from "./styles";
import Pagination from "@material-ui/lab/Pagination";

const Paginate = ({ news, page, handleChange }) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" className={classes.root}>
      <Pagination
        count={news.total_pages}
        page={page}
        color="primary"
        onChange={handleChange}
      />
    </Box>
  );
};

export default Paginate;
