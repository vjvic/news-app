import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Grid,
  Chip,
  Link,
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import useStyles from "./styles";
import Truncate from "react-truncate";

const NewsItem = ({ item }) => {
  const classes = useStyles();

  const itemTitle = (
    <Typography variant="h6">
      <Truncate lines={1} ellipsis={<span>...</span>}>
        {item.title}
      </Truncate>
    </Typography>
  );

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root}>
        <CardHeader title={itemTitle} subheader={item.published_date} />

        <CardMedia
          className={classes.media}
          src={item.media}
          title={item.title}
          component="img"
        />

        <CardContent>
          <Chip label={item.topic} color="primary" />

          <Typography
            variant="body2"
            color="textSecondary"
            companent="small"
            className={classes.author}
          >
            Author: {item.author}
          </Typography>

          <Typography variant="body2" component="p" className={classes.body}>
            <Truncate
              lines={3}
              ellipsis={
                <span>
                  ... <Link href={item.link}>Read more</Link>
                </span>
              }
            >
              {item.summary}
            </Truncate>
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;
