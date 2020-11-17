import React, { Component } from "react"
import UserService from "../service/UserService";


class UpdateStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: "",
            course: ""
        }


    }

    componentDidMount() {
        UserService.getStudentById(this.state.id).then(res => {
            let student = res.data;
            this.setState({
                name: student.name,
                course: student.course
            });
        });
    }

    updateStudents = (e) => {
        e.preventDefault();
        let student = {
            name: this.state.name,
            course: this.state.course
        }

        UserService.updateStudent(this.state.id, student).then(res => {
            this.props.history.push("/");
        })
    }

    changeNameHandler = (e) => {
        this.setState({ name: e.target.value });
    }

    changeCourseHandler = (e) => {
        this.setState({ course: e.target.value });
    }


    cancelButton() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="conainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    {/* INPUT NAME */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInpuName">Name</label>
                                        <input placeholder="First Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                        <small className="form-text text-muted">Student Name</small>
                                    </div>

                                    {/* INPUT COURSE */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputCourse">Course</label>
                                        <input placeholder="Course" name="course" className="form-control"
                                            value={this.state.course} onChange={this.changeCourseHandler} />
                                        <small className="form-text text-muted">Student Course</small>
                                    </div>


                                    <button className="btn btn-success" onClick={this.updateStudents}>Save Changes</button>
                                    <button className="btn btn-danger" style={{ marginLeft: "5px" }} onClick={this.cancelButton.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default UpdateStudent;