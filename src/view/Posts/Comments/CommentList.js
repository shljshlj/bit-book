import React, { Component } from 'react';
import CommentItem from './CommentItem';

class CommentList extends Component {
    render() {
        return (
            <div className="ui comments">
                <form className="ui reply form">
                    <div className="field">
                        <textarea></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit"></i> Add Reply
                    </div>
                </form>

                <h3 className="ui dividing header">Comments</h3>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
        );
    }
}

export default CommentList;