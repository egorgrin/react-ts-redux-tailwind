import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Navigation from "./components/Navigation";

function App() {
  return (
      <>
        <Navigation/>
        <Routes>
          <Route path={'*'} element={<Navigate to={'/'}/>}/>

          <Route path={'/'} element={<Home/>}/>
          <Route path={'/favourites'} element={<Favourites/>}/>
        </Routes>
      </>
  );
}

export default App;
