import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./Views/HomeView";
import Ca from "./Views/Ca";
import Stm from "./Views/Stm";
import Qgc from "./Views/Qgc";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/ca" component={Ca} />
        <Route exact path="/stm" component={Stm} />
        <Route exact path="/stm" component={Qgc} />
      </Switch>
    </Router>
  );
}

export default App;
