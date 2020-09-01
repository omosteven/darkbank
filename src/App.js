import React from "react";

import Head from "./header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/body";
import AboutUs from "./Components/aboutus";
import Developer from "./Components/developer";
import Blog from "./Components/blog";
import Preloader from "./preloader";
import AdminDashboard from "./Components/dashboard";
import AddBlogPost from "./Components/dashboard/addBlog";
import AllBlogPosts from "./Components/dashboard/viewBlogPosts";
import EditWebsite from "./Components/dashboard/editWebsite";
import AddJob from "./Components/dashboard/addJob";
import SliderCustomRange from "./Components/dashboard/testDash";
import Auth from "./Components/dashboard/auth";
import Register from "./Components/register";
import SignIn from "./Components/signin";
import Test from "./test1";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/aboutus/">
            <AboutUs />
          </Route>
          <Route path="/developer/">
            <Developer />
          </Route>
          <Route path="/blog/">
            <Blog />
          </Route>
          <Route path="/auth/register">
            <Register />
          </Route>
          <Route path="/auth/signin/">
            <SignIn />
          </Route>
          <Route path="/preloader/">
            <Preloader />
          </Route>
          <Route path="/test/">
            <Test/>
          </Route>

          {/* Dashboard Routes Here */}
          <Route path="/admin/addBlog/">
            <AddBlogPost />
          </Route>
          <Route path="/admin/viewBlog/">
            <AllBlogPosts />
          </Route>
          <Route path="/admin/editWebsite">
            <EditWebsite />
          </Route>
          <Route path="/admin/addJob">
            <AddJob />
          </Route>
          <Route path="/admin/test">
            <SliderCustomRange />
          </Route>
          <Route path="/admin/auth">
            <Auth />
          </Route>
          <Route path="/admin/">
            <AdminDashboard />
          </Route>

          <Route path="/">
            {/* <Temporary/> */}
            <Home />
          </Route>
          {/* <Route path="*">
            <Register/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
