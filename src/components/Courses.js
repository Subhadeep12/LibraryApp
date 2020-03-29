import React from "react";
import { getCourses } from "../api/courseApi";
class Courses extends React.Component {
  state = {
    courses: []
  };
  componentDidMount() {
    getCourses().then(courses => this.setState({ courses: courses }));
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>Title</tr>
            <tr>AuthorID</tr>
            <tr>Category</tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => {
              return (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Courses;
