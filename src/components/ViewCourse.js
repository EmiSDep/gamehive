import React, {Component} from 'react';
import { useParams, withRouter } from 'react-router-dom';
import Button from './common/Button';

class ViewCourse extends Component {
    state = {
        showComments: false,
    };

    handleClick = () => {
        this.setState({
            showComments: !this.state.showComments,
        })
    }

    renderComments = (course) => {
        return course.comments.map(comment => {
            return (
            <div className="box">
                <p>{comment.user}</p>
                <p>{comment.text}</p>
            </div>
            );
        });
    };

    render() {
     const {course} = this.props;
     const {courseId} = this.props.match.params;
     console.log(courseId);
     return (
        <div>
            <h3>{course.title}</h3>
            <h4>{course.resourceAuthor}</h4>
            <p>{course.summary}</p>
            <p>{course.link}</p>
            <Button onClick={this.handleClick}
            buttonStyle={{ backgroundColor: "black"}}>
                {this.state.showComments ? "Hide Comments" : "Show Comments"}
            </Button>
            {this.state.showComments ? 
                this.renderComments(course) : null}
        </div>
        );
    }
};

export default withRouter(ViewCourse);