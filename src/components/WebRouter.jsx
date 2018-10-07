import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BlogPost from './BlogPost'

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2>Home</h2>
    },
    {
      path: "/blogpost",
      main: () => <BlogPost></BlogPost>
    },
    {
      path: "/home",
      main: () => <h2>Shoelaces</h2>
    }
  ];


  const WebRouter = () => (
    <Router>  
        <div>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
    </Router>
  );
  
export default WebRouter;