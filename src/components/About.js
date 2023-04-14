import React from 'react';
import Avatar from "../assets/avatar.svg"

const About = () => {
  return <div className="py-8">
    <div className="container mx-auto">
      <div className="columns-2 flex w-full justify-between">
        <div id="avatar">
          <img src={Avatar} alt="" />
        </div>
        <div className='container mx-auto'>
          <p>
            Lorem Ipsum etc.
          </p>
        </div>
      </div>
    </div>
  </div>;
};

export default About;
