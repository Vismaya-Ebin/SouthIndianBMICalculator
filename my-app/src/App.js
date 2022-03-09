import "./App.css";

import Header from "./components/Header";
import Healthchartform from "./components/HealthChartForm";
import React, {  useState, createContext, useEffect } from "react";
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
    { path: "/edit/:id", element: <EditForm /> },
  ]);
  return routes;
};
/** Created Context*/
export const Datacontext = createContext(null);

function App() {
  /**Get Api data pushed to state */
  const [initialData, updatedData] = useState([]);
  useEffect(() => {
    const endpoint = "https://622733532dfa5240181721bf.mockapi.io/healthChart";
    fetch(endpoint, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        updatedData(data);
      });
  }, []);
  let stringData = " Below 18 underweight 18-24 normal 24-29 overweight 29-34 obese 34-39 obese";
/**Data to pass to all components*/
  const obj = { state: stringData };

  return (
    <div>
      <Datacontext.Provider value={obj}>
        <Header />
        <Router>
          <AppRouter />
        </Router>
      </Datacontext.Provider>
    </div>
  );
}

export default App;
