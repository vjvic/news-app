import React, { useEffect } from "react";
import Layout from "components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Categories from "pages/Categories";
import Result from "pages/Result";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "Redux/actions/authActions";

function App() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(token));
  }, [dispatch, token]);

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories/:value" component={Categories} />
            <Route exact path="/:value" component={Result} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
