import React from "react";
import PropTypes from "prop-types";
class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post.title,
      content: props.post.content
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="post[title]"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />

          <label>Content</label>
          <input
            type="text"
            name="post[content]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />

          <input type="submit" />
        </div>
      </React.Fragment>
    );
  }
}

export default PostForm;
