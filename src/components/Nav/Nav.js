import React from "react";
import useStyles from "./styles";
import { useTheme } from "@material-ui/core";
import {
  Drawer,
  Hidden,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { useHistory, useLocation } from "react-router-dom";
import { menuItems } from "./menuItems";
import newsIcon from "assets/image/svg/newsIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "Redux/actions/authActions";
/* import { Link } from "react-router-dom"; */

const Nav = ({ mobileOpen, handleDrawerToggle, window }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div>
        <Typography variant="h5" className={classes.title}>
          <img src={newsIcon} alt="newsicon" width={40} />
          NewsHunt
        </Typography>
      </div>

      {/*menu items */}

      <Divider />

      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}

        <Divider />

        <ListItem button onClick={() => history.push("/saved-news")}>
          <ListItemIcon>{<BookmarkBorderIcon />}</ListItemIcon>
          <ListItemText primary="Saved news" />
        </ListItem>

        {currentUser && (
          <>
            <ListItem button onClick={() => dispatch(logout())}>
              <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        )}
      </List>

      {/*   credits */}

      <Typography
        variant="body2"
        component="p"
        color="textSecondary"
        className={classes.credits}
      >
        powered by{" "}
        <Link href="https://newscatcherapi.com/" color="inherit">
          <strong>{"</newscatcher>"}</strong>
        </Link>{" "}
      </Typography>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Nav;
