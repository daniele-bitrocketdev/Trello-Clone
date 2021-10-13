import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "./app/store";
import Navbar from "./components/Navbar";
import Boardspage from "./Pages/BoardsPages";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <div style={{ height: "100vh" }}>
          <Switch>
            <Route exact path="/boards" component={Boardspage} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}
