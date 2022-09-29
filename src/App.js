import { Suspense, useId } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth/Auth";
import Baddress from "./components/BAddress/Baddress";
import Basset from "./components/BAsset/Basset";
import Bowner from "./components/Bowner/Bowner";
import Ctaddress from "./components/ctAddress/Ctaddress";
import Detail from "./components/Detail/Detail";
import { Home } from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Owner from "./components/Owner/Owner";
import Slug from "./components/slug/Slug";
import Waiting from "./components/waiting/Waiting";

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
