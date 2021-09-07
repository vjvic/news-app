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
  Link,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import useStyles from "./styles";
import Truncate from "react-truncate";
import noImage from "assets/image/no_image.jpg";
import { format } from "date-fns";
import { topicItems } from "./topicItems";

const NewsItem = ({ item, loading }) => {
  const classes = useStyles();

  const {
    title,
    media,
    topic,
    author,
    link,
    summary,
    published_date,
    clean_url,
  } = item;

  let image = media ? media : noImage;

  //convert date and time

  const date = new Date(published_date);
  const publishedDate = format(date, "MM/dd/yyyy 'at' h:mm a");

  // news title

  const itemTitle = (
    <Link variant="h6" color="inherit" component="a" href={link}>
      <Truncate lines={1} ellipsis={<span>...</span>}>
        {title}
      </Truncate>
    </Link>
  );

  //find news specific topic
  const findTopic = topic
    ? topicItems.find((item) => item.text === topic)
    : null;

  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card className={classes.root}>
        {/* card header */}

        <CardHeader
          title={
            loading ? (
              <Skeleton animation="wave" height={30} width="90%" />
            ) : (
              itemTitle
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={20} width="20%" />
            ) : (
              publishedDate
            )
          }
        />

        {/*  card image */}

        {loading ? (
          <Skeleton variant="rect" width="100%" height={200} />
        ) : (
          <div className={classes.mediaWrapper}>
            <CardMedia
              className={classes.media}
              src={image}
              title={title}
              component="img"
            />
          </div>
        )}

        {/* card content */}

        <CardContent>
          {loading ? (
            <Skeleton animation="wave" height={30} width="30%" />
          ) : (
            <Typography
              color="textSecondary"
              companent="small"
              className={classes.topic}
            >
              {findTopic && findTopic.icon} {findTopic && findTopic.text}
            </Typography>
          )}

          {loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            <Typography
              variant="body2"
              color="textSecondary"
              companent="small"
              className={classes.author}
            >
              Author: {author}
            </Typography>
          )}

          {loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            <Typography
              variant="body2"
              color="textSecondary"
              companent="small"
              className={classes.author}
            >
              url: {clean_url}
            </Typography>
          )}

          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={20}
                style={{ margin: "10px 0" }}
              />
              <Skeleton
                animation="wave"
                height={20}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={20} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" component="p" className={classes.body}>
              <Truncate lines={3} ellipsis={<span>...</span>}>
                {summary}
              </Truncate>
            </Typography>
          )}
        </CardContent>

        {/* card actions */}

        <CardActions>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="circle"
              width={30}
              height={30}
            />
          ) : (
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;
