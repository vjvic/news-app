import Layout from "components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import World from "pages/World";
import Sports from "pages/Sports";
import Tech from "pages/Tech";
import Finance from "pages/Finance";
import Politics from "pages/Politics";
import Business from "pages/Business";
import Economics from "pages/Economics";
import Entertainment from "pages/Entertainment";
import Beauty from "pages/Beauty";
import Gaming from "pages/Gaming";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/world" component={World} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/finance" component={Finance} />
            <Route exact path="/politics" component={Politics} />
            <Route exact path="/business" component={Business} />
            <Route exact path="/economics" component={Economics} />
            <Route exact path="/entertainment" component={Entertainment} />
            <Route exact path="/beauty" component={Beauty} />
            <Route exact path="/gaming" component={Gaming} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
