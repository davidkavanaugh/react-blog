import React from 'react';
import Strapi from "strapi-sdk-javascript/build/main";
import { Link } from 'react-router-dom';
import './LatestPosts.css';

const strapi = new Strapi("http://localhost:1337");

class LatestPosts extends React.Component {
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
      {this.state.posts.reverse().slice(-0, -this.state.posts.length+1).map(post => 
        <article className="featured-blog-post" key={post.id}>
         <div className="featured-blog-post__title">{post.title}</div>
         <div className="featured-blog-post__author">by {post.author.username}</div>
         <div className="featured-blog-post__content">{post.content}</div>
        </article>
      )}
      {this.state.posts.map(post => 
        <div className="recent-posts__post-link" key={post.id}>
        <Link className="flex" to={`/blogpost/${post.id}`}>
          <h3>{post.title}</h3>
          {/* <img src={`http://localhost:1337${post.image.url}`} alt={post.title} /><br /> */}
        </Link>
        {/* <BuyButton post={post} /> */}
      </div>
      )}
    </section>
  )
 }
}
export default LatestPosts;

