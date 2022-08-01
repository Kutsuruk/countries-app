import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import {ALL_COUNTRIES} from "./config";
import {Route, Routes} from 'react-router-dom'

import {HomePage} from "./pages/HomePage";
import {NotFound} from "./pages/NotFound";
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
            <Routes>
                <Route path='/' element={<HomePage countries={countries} setCountries={setCountries}/>} />
                <Route path='country:/name' element={<Details />} />
                <Route path='/' element={<NotFound />} />
            </Routes>
        </Main>
    </>
  );
}

export default App;
