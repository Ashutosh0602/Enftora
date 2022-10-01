import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Waiting from "./components/waiting/Waiting";
import { Home } from "./components/home/Home";
import { Auth } from "./components/auth/Auth";
// const Auth = React.lazy(() => import("./components/auth/Auth"));
const Baddress = React.lazy(() => import("./components/BAddress/Baddress"));
// import Baddress from "./components/BAddress/Baddress";
const Basset = React.lazy(() => import("./components/BAsset/Basset"));

// import Basset from "./components/BAsset/Basset";
const Bowner = React.lazy(() => import("./components/Bowner/Bowner"));

// import Bowner from "./components/Bowner/Bowner";
const Ctaddress = React.lazy(() => import("./components/ctAddress/Ctaddress"));

// import Ctaddress from "./components/ctAddress/Ctaddress";
const Detail = React.lazy(() => import("./components/Detail/Detail"));

// import Detail from "./components/Detail/Detail";
// const Home = React.lazy(() => import("./components/home/Home"));

const Layout = React.lazy(() => import("./components/layout/Layout"));

// import Layout from "./components/layout/Layout";
const Owner = React.lazy(() => import("./components/Owner/Owner"));

// import Owner from "./components/Owner/Owner";
const Slug = React.lazy(() => import("./components/slug/Slug"));

// import Slug from "./components/slug/Slug";
// const Waiting = React.lazy(() => import("./components/waiting/Waiting"));

const userID = localStorage.getItem("usID");

function App() {
  return (
    // <Suspense
    //   fallback={
    //     <div>
    //       <Waiting />
    //     </div>
    //   }
    // >
    //   <Switch>
    //     <Route path="/" exact>
    //       <Redirect to="/auth" />
    //     </Route>
    //     <Route path="/auth" exact>
    //       <Auth />
    //     </Route>
    //     <Layout>
    //       <Switch>
    //         <Route path="/auth/:user">
    //           <Home />
    //         </Route>
    //         <Route path="/auth/:token">
    //           <Detail />
    //         </Route>
    //       </Switch>
    //     </Layout>
    //   </Switch>
    // </Suspense>
    <Suspense
      fallback={
        <div>
          <Waiting />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate path="/auth" />} />
        <Route index path="auth" element={<Auth />} />

        <Route path="auth" element={<Layout />}>
          <Route path={`:${userID}`} element={<Home />} />
          <Route path={`:${userID}/:token`} element={<Detail />} />
          <Route path={`:${userID}/Slug_collenction`} element={<Slug />} />
          <Route
            path={`:${userID}/address_collection`}
            element={<Ctaddress />}
          />
          <Route path={`:${userID}/owner_collection`} element={<Owner />} />
          <Route path={`:${userID}/owner_bundle`} element={<Bowner />} />
          <Route path={`:${userID}/address_bundle`} element={<Baddress />} />
          <Route path={`:${userID}/single_bundle`} element={<Basset />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;
