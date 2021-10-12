import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Boardspage from "./Pages/BoardsPages";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ height: "100vh" }}>
        <Switch>
          <Route exact path="/boards" component={Boardspage} />
        </Switch>
      </div>
    </Router>
  );
}
