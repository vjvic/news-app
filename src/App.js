import Layout from "components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Categories from "pages/Categories";
import Result from "pages/Result";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories/:value" component={Categories} />
            <Route exact path="/result/:value" component={Result} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
