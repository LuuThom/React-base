import React from 'react';

function AboutTheme(props) {
  return (
    <div className="introduce-theme">
      <span className="icon"><i class={props.icon}></i></span>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default AboutTheme
