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


        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCourseHandler = this.changeCourseHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount() {
        UserService.updateStudent(this.state.id).then(res => {
            let student = res.data;

            this.setState({
                name: student.name,
                course: student.course
            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {
            name: this.state.name,
            course: this.state.course
        }
        console.log('employee => ' + JSON.stringify(student));


        UserService.updateStudent(this.state.id, student).then(res => {
            this.props.history.push("/");
        });
    }



    changeNameHandler = (e) => {
        this.setState({ name: e.target.value });
    }

    changeCourseHandler = (e) => {
        this.setState({ course: e.target.value });
    }


    render() {
        return (
            <div>
                <br></br>
                <h3 className="text-center">Update Employee</h3>
                <div className="conainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">


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


                                    <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UpdateStudent;