import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.comment = this.props.item
    }

    render() {
        return (
            <div>
                <div>{this.comment.id}.  {this.comment.name}</div>
                <div>{this.comment.body}</div>
            </div>
        );
    }
}

export default Comment;