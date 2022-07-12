import React, {Component} from 'react';
import {CommentApiService} from "../../services/comment.api.service";
import Comment from "./Comment";

class Comments extends Component {

    state = {comments: []};

    componentDidMount() {
        this.commentService = new CommentApiService();
        this.commentService.getComments().then(value => this.setState({comments: value}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(value => <Comment key={value.id} item={value}></Comment>)}
            </div>
        );
    }
}

export default Comments;