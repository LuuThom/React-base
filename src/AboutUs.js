import React from 'react';
import AboutTheme from './AboutTheme';

function AboutUs(props) {
  return (
    <div className="about">
      <h2>{props.title_section}</h2>
      <p>{props.introduce_section}</p>
      <div className="about__detail">
        <AboutTheme icon="fa fa-desktop" title="WordPress" text="There are many variations of passages of Lorem Ipsum available,..." />
        <AboutTheme icon="fa fa-pencil" title="Design" text="There are many variations of passages of Lorem Ipsum available,..." />
        <AboutTheme icon="fa fa-lightbulb-o" title="Analytics" text="There are many variations of passages of Lorem Ipsum available,..." />
        <AboutTheme icon="fa fa-camera" title="Progamming" text="There are many variations of passages of Lorem Ipsum available,..." />
      </div>
    </div>
  )
}

export default AboutUs
