import "./App.css";

import Header from "./components/Header";
import Healthchartform from "./components/HealthChartForm";
import React, { useContext, useState, createContext, useEffect } from "react";
import ViewChart from "./components/ViewChart";
import EditForm from "./components/EditForm";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";


/**Context is used to share data between components  and avoid props drilling*/


/**useRoutes is used for navigation */
const AppRouter = () => {
  let routes = useRoutes([
    { path: "/", element: <Healthchartform /> },
    { path: "/ViewChart", element: <ViewChart /> },
    { path: "/form", element: <Healthchartform /> },
    { path: "/edit/:id", element: <Healthchartform /> },
  ]);
  return routes;
};

export const context = createContext(null);
 
function App() {
  const [initialData,updatedData] =useState([]);
  // useEffect(() => {
  //   const endpoint = "https://622733532dfa5240181721bf.mockapi.io/healthChart";
  //   fetch(endpoint, { method: "GET" })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Before", data);
  //       getData(data);
  //       updatedData(data);
       
  //     });
  // },[]);
  // const getData=(data)=>{
  //   console.log("Get data", data);
  //   return data;

  // }
  // const [state, setState] = useState(getData(initialData));
  // const obj = { state: state, setState: setState };
  // console.log("Object in APP.JS",state, obj);
  return (
    <div>
      {/* <context.Provider value={obj}> */}
        <Header />
        <Router>
          <AppRouter />
        </Router>
      {/* </context.Provider> */}
    </div>
  );
}


export default App;
