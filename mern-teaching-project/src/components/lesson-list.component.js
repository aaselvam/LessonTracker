import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Lesson = props => (
    <tr>
        <td>{props.lesson.username}</td>
        <td>{props.lesson.description}</td>
        <td>{props.lesson.duration}</td>
        <td>{props.lesson.date.substring(0,10)}</td>
        <td>{props.lesson.link}</td>
        <td>
            <Link to={"/edit/"+props.lesson._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteLesson(props.lesson._id) }}>Delete</a>
        </td>
    </tr>
)

export default class LessonList extends Component{
    constructor(props) {
        super(props);

        this.deleteLesson = this.deleteLesson.bind(this);
        this.state = {lessons: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/lessons/')
            .then(res => {this.setState({ lessons: res.data })})
            .catch(err => {
                console.log(err);
            })
    }

    deleteLesson(id) {
        axios.delete('http://localhost:5000/lessons/' + id)
            .then(res => console.log(res.data));

        
        
        this.setState({
            lessons: this.state.lessons.filter(el => el._id !== id)
        })
    }

    lessonList() {
        return this.state.lessons.map(res => {
            return <Lesson lesson={res} deleteLesson={this.deleteLesson} key={res._id}/>
        })
    }

    render() {
        return(
            <div>
                <h3>All Lessons</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Link</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.lessonList() }
                    </tbody>
                </table>
            </div>
        );
    }
}