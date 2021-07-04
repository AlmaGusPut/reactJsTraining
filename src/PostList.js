import React from 'react';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const posts = this.props.posts;

        return <div className="colors"
            ref={(el) => {
                if (el) {
                    el.style.setProperty('border-color', "#FF0000", 'important');
                }
            }}
        >
            Postlist :<br />
            {posts.map((post, key) => {
                return (
                    <div key={key}>{post}     <span style={{ cursor: "pointer" }}
                        onClick={() => this.props.deletePost(post)}
                    >Remove</span><br /></div>
                )
            })}
        </div>
    }
}