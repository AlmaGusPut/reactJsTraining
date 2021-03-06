import React from 'react';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: ""
        }
    }

    updatePost = (e) => {
        this.setState({ post: e.target.value })
    }

    addPost = () => {
        const post = this.state.post;
        this.props.addPost(post);
        this.setState({ post: "" })
    }

    render() {
        return <div>
            Post :
            <input type="text" name="post" value={this.state.post} onChange={this.updatePost}></input><br />
            <button onClick={this.addPost}>Add Post</button>
        </div>
    }
}