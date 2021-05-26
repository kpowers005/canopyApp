import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Treehouses from "./components/Treehouses";
import ListingPage from "./components/ListingPage";
import UserPage from "./components/UserPage";
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/users/:id" >
            <UserPage />
          </Route>
          <Route path="/treehouses" exact>
            <Treehouses />
          </Route>
          <Route path="/treehouses/:id">
            <ListingPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
