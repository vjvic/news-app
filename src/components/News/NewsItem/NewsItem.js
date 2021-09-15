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
  Tooltip,
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import useStyles from "./styles";
import Truncate from "react-truncate";
import noImage from "assets/image/no_image.jpg";
import { format } from "date-fns";
import { topicItems } from "./topicItems";
import { useSelector, useDispatch } from "react-redux";
import { addNews, deleteNews } from "Redux/actions/firestoreActions";

const NewsItem = ({ item }) => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.auth);
  const { savedNews } = useSelector((state) => state.firestore);
  const dispatch = useDispatch();

  const {
    title,
    media,
    topic,
    author,
    link,
    summary,
    published_date,
    clean_url,
    _id,
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

  const handleSavedNews = () => {
    dispatch(addNews(currentUser[0].localId, _id, item));
  };

  let storedNews = savedNews.find((news) => news._id === _id);
  const isStored = storedNews ? true : false;

  const saveButton = (
    <>
      {isStored ? (
        <Tooltip title="Remove">
          <IconButton
            onClick={() => dispatch(deleteNews(currentUser[0].localId, _id))}
          >
            <BookmarkIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Save">
          <IconButton
            disabled={currentUser.length <= 0 ? true : false}
            onClick={handleSavedNews}
          >
            <BookmarkBorderIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );

  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card className={classes.root}>
        {/* card header */}

        <CardHeader title={itemTitle} subheader={publishedDate} />

        {/*  card image */}

        <div className={classes.mediaWrapper}>
          <CardMedia
            className={classes.media}
            src={image}
            title={title}
            component="img"
          />
        </div>

        {/* card content */}

        <CardContent>
          <Typography
            color="textSecondary"
            companent="small"
            className={classes.topic}
          >
            {findTopic && findTopic.icon} {findTopic && findTopic.text}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            companent="small"
            className={classes.author}
          >
            Author: {author}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            companent="small"
            className={classes.author}
          >
            url: {clean_url}
          </Typography>
          <Typography variant="body2" component="p" className={classes.body}>
            <Truncate lines={3} ellipsis={<span>...</span>}>
              {summary}
            </Truncate>
          </Typography>
        </CardContent>

        {/* card actions */}

        <CardActions>{saveButton}</CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;
