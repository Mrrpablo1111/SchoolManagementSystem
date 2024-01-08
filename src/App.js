
import { Switch, Route } from "react-router-dom";
import Home from"./pages/Home"
import Layout from "./components/Layout"
import LWKPage from "./pages/LWKPage";
import About from "./pages/About";
import Context from "./pages/Context";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact> 
          <Home/>
        </Route>
        <Route path="/About"> 
          <About/>
        </Route>
        <Route path="/Context"> 
          <Context/>
        </Route>
        <Route path="/LKWPage" exact> 
          <LWKPage/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
