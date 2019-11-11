import React from 'react';

function BlogDetail(props) {
  return (
    <div className="blog__img">
      <img className="Avatar" src={props.src_img} alt={props.title_img}/>
      <h4>{props.title_img}</h4>
      <div className="blog__content-img">
        <p>{props.intro_img}</p>
      </div>
    </div>
  )
}

function Bog(props) {
  return (
    <div className="blog">
      <h2>{props.title_section}</h2>
      <p>{props.introduce_section}</p>
      <div className="blog_detail"> 
        <BlogDetail src_img="../girl.jpg" title_img="Et harum quidem" intro_img="Et harum quidem rerum facilis est et expedita distinctio" />
        <BlogDetail src_img="girl.jpg" title_img="Et harum quidem" intro_img="Et harum quidem rerum facilis est et expedita distinctio" />
        <BlogDetail src_img="girl.jpg" title_img="Et harum quidem" intro_img="Et harum quidem rerum facilis est et expedita distinctio" />
      </div>
    </div>
  )
}

export default Bog
