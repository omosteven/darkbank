import React from "react";
import AdminDashboard from ".";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CSS/viewBlog.css";
import "../CSS/blog.css";
import AdminFooter from "./admin-footer";

function AllBlogPosts() {
  AOS.init();
  document.title = "DarkBank | Admin | VIEW ALL BLOG POSTS";
  const BlogPost = [
    {
      dev: 1
    },
    {
      dev: 2
    },
    {
      dev: 3
    },
    {
      dev: 3
    },
    {
      dev: 3
    },
    {
      dev: 3
    },
    {
      dev: 3
    }
  ];

  return (
    <div>
      <AdminDashboard />
      <div>.</div>
      <div className="container AllBlog" data-aos="fade-in" aos-duration="1500">
        <div className="row mt-3">
          {BlogPost.map(posts => (
            <div
              className="col-sm-12 col-lg-6 col-xl-4 col-md-6 blog-inner"
              data-aos="fade-out"
              aos-duration="1000"
            >
              <div className="card">
                <div className="col-sm-14 col-lg-14 col-xl-14 col-md-14">
                  <div className="images">
                    <img
                      src="https://res.cloudinary.com/dzflzvx3h/image/upload/v1597163421/darkbank/blog/blogging-336376_1920_nqzfq8.jpg"
                      className="blog"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12">
                  <div className="card-inner">
                    <div className="header">
                      <h5 className="blog-title">
                        DARK BANK IS IMPROVING ITS SECURITY
                      </h5>
                      <span className="blog-date">
                        <i className="fa fa-calendar icon-blog"></i> 22/08/2020
                      </span>
                      <span className="blog-poster">
                        <i className="fa fa-user icon-blog"></i> BY ADMIN
                      </span>
                    </div>
                    <div className="blog-content">
                      <p>
                        Lorem Ipsum just for testing and testing and testing
                        annd testing
                      </p>
                    </div>
                    <div className="readMore">
                      <Link to="" className="read">
                        EDIT BLOG
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AdminFooter />
    </div>
  );
}

export default AllBlogPosts;
