import React, {Component} from 'react';

class Posts extends Component {

    handleUpvote = (post, key) => {
        this.props.firebase.ref('posts/' + key).set({
        title: post.title,
        upvote: post.upvote + 1,
        downvote: post.downvote
        });
    }
    handleDownvote = (post, key) => {
        this.props.firebase.ref('posts/' + key).set({
        title: post.title,
        upvote: post.upvote - 1,
        downvote: post.downvote
        });
    } 


    render() {
        let posts = this.props.posts;
        let _this = this;
        if (!posts) {
        return false;
        }
        if(this.props.loading){
            return <div> Loading...</div>
        }
        return (
            <div className='posts'>
                {Object.keys(posts).map(key => {
                    return (
                        <div key={key}>
                            <h1>{posts[key].title}</h1>
                            <p>Upvotes: { posts[key].upvote }</p>
                            <p>Downvotes: { posts[key].downvote }</p>
                            <button
                                onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                                type="button"
                                >
                                Up vote
                            </button>
                            <button
                                onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                                type="button"
                                >
                                Down vote
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Posts;