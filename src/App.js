import React, { useEffect } from "react";
import Layout from "components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Categories from "pages/Categories";
import Result from "pages/Result";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "Redux/actions/authActions";
import SavedNews from "pages/SavedNews";
import { getSavedNews } from "Redux/actions/firestoreActions";

function App() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);

  //set user
  useEffect(() => {
    dispatch(getUserData(token));
  }, [dispatch, token]);

  //get saved news
  useEffect(() => {
    if (currentUser) {
      const userID = currentUser[0].localId;
      dispatch(getSavedNews(userID));
    }
  }, [dispatch, currentUser]);

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories/:value" component={Categories} />
            <Route path="/saved-news" component={SavedNews} />
            <Route exact path="/results/:value" component={Result} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
