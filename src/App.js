import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import {ALL_COUNTRIES} from "./config";
import {Route, Switch} from 'react-router-dom'

import {HomePage} from "./pages/HomePage";
import {Details} from "./pages/Details";

function App() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data)
        )
    }, [])

  return (
    <>
        <Header />
        <Main>
            <Switch>
                <Route exact path="/">
                    <HomePage countries={countries} setCountries={setCountries} />
                </Route>
                <Route path="/country/:name" component={Details} />
            </Switch>
        </Main>
    </>
  );
}

export default App;
