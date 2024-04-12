import React from "react";
import "./Profile.css";
import image from "../../assets/logo.png"

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="row">
          <div className="img-col col-6 col-md-4">
            <img src={image} alt="" />
          </div>
          <div className="text-col col-12 col-sm-6 col-md-8">
            <div className="center">
              <h2>Name:</h2>
              <h2></h2>
              <p>No. of Recipes added:</p>
              <p>No. of Favorites added:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
