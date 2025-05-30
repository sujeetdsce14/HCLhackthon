import React from "react";
import { Link } from "react-router";

function Dashboard() {
  return (
    <div>
      {/* Banner Header with Nav */}
      <nav className="">
        <div className="">
         <div className="banner text-center">
         
          <img
              src="https://www.bayer.in/themes/custom/bayer_cpa/logo.svg"
              alt="Bayer Logo"
              className="img-fluid ms-2"
              style={{ maxWidth: "50px",marginRight:`20px` }}
            />
             <p className="logo-heading"> Bayer Healthcare</p>
           
          </div>
           <nav className="navbar-custom">
               <div className="nav-container"> <Link to="/" className="nav-link">
                  Home
                </Link>
                
                <Link to="/" className="nav-link">
                  Health Topics
                </Link>
                <Link to="/" className="nav-link">
                  Resources
                </Link>
                <Link to="/" className="nav-link">
                  About Us
                </Link>
                <Link to="/" className="nav-link">
                 Contact
                </Link>
                <Link to="/signin" className="nav-link">
                  Sign In
                </Link>
</div>
                
            </nav>
        
        </div>
      </nav>

      {/* Banner */}
      <div className="banner  py-5 text-center">
        <h1 className="display-4">Your Health, Our Priority</h1>
        <p className="lead">Explore the latest health information and resources from Bayer Healthcare</p>
      </div>

      {/* Cards Section */}
      <div className="container ">
        <div className="row dashborad-subhead">
            <h3>Featured Health Topics</h3>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">COVID-19 Updates</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button className="pink btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Heart Health</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button className="pink btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Mental Wellness</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button className="pink btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;