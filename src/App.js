import { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth/Auth";
import { Home } from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Waiting from "./components/waiting/Waiting";

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <Waiting />
        </div>
      }
    >
      <Switch>
        <Route path="/" exact>
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Layout>
          <Route path="/auth/:user">
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Suspense>
  );
}

export default App;
