import React, { useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main";
//import ReactGa from "react-ga";

function App() {
  /* useEffect( () => {
    ReactGa.initialize('G-1QNDJY16NH')
    //to report page view
    ReactGa.pageview('/Home')
  }, []) */

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
