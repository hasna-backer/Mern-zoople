import React from "react";
import ProfilePicture from "./ProfilePicture";
import Bio from "./Bio";
import Hobbies from "./Hobbies";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <ProfilePicture />
      <Bio />
      <Hobbies />
    </section>
  );
}

export default AboutMe;