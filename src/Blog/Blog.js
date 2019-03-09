import React from 'react';
import Strapi from "strapi-sdk-javascript/build/main";

import './Blog.css';

const strapi = new Strapi("https://strapi-blog-cms.herokuapp.com");

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
   }
 }

async componentDidMount() {
 try {
   const posts = await strapi.getEntries("blogposts")
   this.setState({ posts });
 } 
 catch(err) {
  alert(err);
 }
}
render() {
  return (
    <section>
      {this.state.posts.reverse().map(post => 
        <article className="blog-post" key={post.id}>
         <div className="blog-post__title">{post.title}</div>
         <div className="blog-post__author">by {post.author.username}</div>
         <div className="blog-post__content">{post.content}</div>
        </article>
      )}
    </section>
  )
 }
}
export default Blog;