import React, { Component } from "react"
import UserService from "../service/UserService"

class CreateStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: "",
            course: ""
        }

        this.changeNameHolder = this.changeCourseHandler.bind.this
        this.changeCourseHandler = this.changeCourseHandler.bind.this

    }

    componentDidMount() {
        if (this.state.id === "_add") {
            return
        } else {
            UserService.getStudentById(this.state.id).then(res => {
                let student = res.data;
                this.setState({
                    name: student.name,
                    course: student.course
                });
            });
        }
    }

    changeNameHolder = (e) => {
        this.setState({ name: e.target.value })
    }

    changeCourseHandler = (e) => {
        this.setState({ course: e.target.value })
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Student</h3>
        } else {
            return <h3 className="text-center">Update Student</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="conainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }

                            <div className="card-body">
                                <form>
                                    {/* INPUT NAME */}
                                    <div class="form-group">
                                        <label for="exampleInpuName">Name</label>
                                        <input placeholder="First Name" name="name" className="form-control"
                                            value={this.state.firstName} onChange={this.changeNameHolder} />
                                        <small class="form-text text-muted">Student Name</small>
                                    </div>

                                    {/* INPUT COURSE */}
                                    <div class="form-group">
                                        <label for="exampleInputCourse">Course</label>
                                        <input placeholder="Course" name="course" className="form-control"
                                            value={this.state.course} onChange={this.changeCourseHandler} />
                                        <small class="form-text text-muted">Student Name</small>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CreateStudent