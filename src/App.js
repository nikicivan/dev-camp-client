import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import BootcampsPage from "./pages/bootcamps-page/BootcampsPage";
import BootcampSinglePage from "./pages/bootcamp-single-page/BootcampSinglePage";
import Signin from "./pages/sign-in/Signin";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/bootcamps" exact component={BootcampsPage} />
          <Route
            path="/bootcamps/:slug/:id"
            exact
            component={BootcampSinglePage}
          />
          <Route path="/signin" exact component={Signin} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
