import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./componets/login/index";
import Home from "./componets/home/index";
import Albums from "./componets/albums/index";
import NavBar from "./componets/navbar";
import Spinner from "./componets/spinner/Spinner";
import { auth, onAuthStateChanged } from "./firebaseConfig";

function App() {
  const [user, setUser] = useState(false);
  const [search, setSearch] = useState("");
  const [musics, setMusic] = useState([]);
  const [idBand, setIdBand] = useState("");
  const [nameBand, setNameBand] = useState("");

  useEffect(() => {
    const obtenerDatos = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true);
          // ...
        } else {
          setUser(false);
        }
      });
    };
    obtenerDatos();
    return () => {
      obtenerDatos();
    };
  }, []);

  return (
    <Router>
      {user ? <NavBar /> : <Redirect to="/" />}
      <Switch>
        <Route exact path="/" render={() => <Login setUser={setUser} />} />

        {user ? (
          <>
            <Route
              exact
              path="/home"
              render={() => (
                <Home
                  setMusic={setMusic}
                  musics={musics}
                  search={search}
                  setSearch={setSearch}
                  setIdBand={setIdBand}
                  setNameBand={setNameBand}
                />
              )}
            />
            <Route
              exact
              path="/albums"
              render={() => <Albums idBand={idBand} nameBand={nameBand} />}
            />
            <Route exact path="/spinner" render={() => <Spinner />} />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
