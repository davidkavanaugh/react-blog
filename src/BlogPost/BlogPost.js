import React, { Component } from 'react';
import './BlogPost.css';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, blogpost: {} }
  }

  async componentDidMount() {
    let response = await fetch(`http://localhost:1337/blogposts/${this.props.match.params.id}`)
    let data = await response.json()
    this.setState({
      loading: false,
      blogpost: data
    })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="product">
          <div className="product__information">
            <h2 className="Product-title">{this.state.blogpost.title}</h2>
          </div>
          <div className="product__description">
            {this.state.blogpost.content}
          </div>
        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default BlogPost;