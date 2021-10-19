import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
// switch job is to view the first match, so without exact... '/' first match is sent to {Home}
